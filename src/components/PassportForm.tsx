// src/components/PassportForm.tsx
"use client";

import React, { useRef, useState } from "react";

/** Google Apps Script endpoint + token (shared) **/
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532"; // must match AUTH_TOKEN

const MAX_ADDITIONAL_FILES = 4;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

const FAST_IT_URL = "https://serviziconsolari.esteri.it/ScoFE/index.sco";

export default function PassportForm() {
  // refs
  const proofRef = useRef<HTMLInputElement | null>(null);
  const filesRef = useRef<HTMLInputElement | null>(null);

  // basic contact
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // booking flow: appointment-only (general support removed)
  const [bookingType] = useState<"support" | "appointment">("appointment");

  // appointment-specific fields
  const [heightCm, setHeightCm] = useState(""); // allow users to input centimetres
  const [eyeColour, setEyeColour] = useState("");
  const [maritalStatus, setMaritalStatus] = useState<
    "single" | "married" | "divorced" | "widowed" | "other"
  >("single");

  // NEW: Do you have kids under 18? (required for appointment)
  const [hasKidsUnder18, setHasKidsUnder18] = useState<"yes" | "no" | "">("");

  // prenotami credentials or account creation
  const [prenotamiEmail, setPrenotamiEmail] = useState("");
  const [prenotamiPassword, setPrenotamiPassword] = useState("");
  const [showPrenotamiPassword, setShowPrenotamiPassword] = useState(false);
  const [createPrenotami, setCreatePrenotami] = useState(false);
  const [acceptPrenotamiCharge, setAcceptPrenotamiCharge] = useState(false);

  // files: proof of residence (required for appointment) + additional files
  const [proofOfResidence, setProofOfResidence] = useState<File | null>(null);
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([]);

  // AIRE
  const [aireRegistered, setAireRegistered] = useState<"yes" | "no" | "unsure">("unsure");

  // consent + UI state
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function fileToBase64(file: File) {
    const buf = await file.arrayBuffer();
    let binary = "";
    const bytes = new Uint8Array(buf);
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      const slice = bytes.subarray(i, i + chunk);
      binary += String.fromCharCode(...Array.from(slice));
    }
    return btoa(binary);
  }

  // file handlers
  function handleProofChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const f = e.target.files?.[0] ?? null;
    if (!f) {
      setProofOfResidence(null);
      return;
    }
    if (!ALLOWED_TYPES.includes(f.type)) {
      setError("Proof must be PDF, JPG or PNG.");
      if (proofRef.current) proofRef.current.value = "";
      return;
    }
    if (f.size > MAX_FILE_SIZE) {
      setError("Proof file must be under 5 MB.");
      if (proofRef.current) proofRef.current.value = "";
      return;
    }
    setProofOfResidence(f);
  }

  function handleAdditionalFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const sel = e.target.files;
    if (!sel || sel.length === 0) return;

    const arr = Array.from(sel);
    if (arr.length + additionalFiles.length > MAX_ADDITIONAL_FILES) {
      setError(`You may upload up to ${MAX_ADDITIONAL_FILES} additional files.`);
      if (filesRef.current) filesRef.current.value = "";
      return;
    }

    for (const f of arr) {
      if (!ALLOWED_TYPES.includes(f.type)) {
        setError("Additional files must be PDF, JPG or PNG.");
        if (filesRef.current) filesRef.current.value = "";
        return;
      }
      if (f.size > MAX_FILE_SIZE) {
        setError("Each additional file must be under 5 MB.");
        if (filesRef.current) filesRef.current.value = "";
        return;
      }
    }

    setAdditionalFiles((prev) => [...prev, ...arr]);
    if (filesRef.current) filesRef.current.value = "";
  }

  function removeAdditionalFile(index: number) {
    setAdditionalFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function removeProof() {
    setProofOfResidence(null);
    if (proofRef.current) proofRef.current.value = "";
  }

  function openFastIt() {
    window.open(FAST_IT_URL, "_blank", "noopener");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // basic validation
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError("Please enter your first and last name and email.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    // AIRE requirement still stands (we recommend AIRE registration)
    if (aireRegistered !== "yes") {
      setError("You must be AIRE registered to proceed — please register on the Fast.it site first.");
      return;
    }

    // consent to data processing
    if (!consent) {
      setError("Please confirm you consent to Resinaro storing and processing your documents.");
      return;
    }

    // appointment-specific validation
  if (bookingType === "appointment") {
      // require personal details
      if (!heightCm.trim() || !eyeColour.trim() || !maritalStatus) {
        setError("For passport appointments we need your height, eye colour and marital status.");
        return;
  }

      // NEW: require answer to kids question
      if (hasKidsUnder18 === "") {
        setError("Please tell us whether you have children under 18 (Yes or No).");
        return;
      }

      // proof of residence mandatory
      if (!proofOfResidence) {
        setError("Proof of residence is required to book an appointment. Please upload a document showing your UK address.");
        return;
      }

      // prenotami account or create account
      if (!createPrenotami) {
        if (!prenotamiEmail.trim() || !prenotamiPassword) {
          setError(
            "To book the appointment we need your prenotami.it login details (email and password), or check the option to have us create an account for £20."
          );
          return;
        }
      } else {
        // if creating account, require acceptance of the £20 fee
        if (!acceptPrenotamiCharge) {
          setError("Please confirm you agree to the £20 fee for creating a prenotami.it account and booking the appointment.");
          return;
        }
      }
    }

    setSubmitting(true);

    try {
  const serviceKey = createPrenotami ? "passport-assistance-account" : "passport-assistance";
      const bookingId = crypto.randomUUID();

      // Build files payload for GAS
  const filesPayload: Array<{ filename: string; mimeType: string; data: string }> = [];
      if (bookingType === "appointment" && proofOfResidence) {
        filesPayload.push({ filename: proofOfResidence.name, mimeType: proofOfResidence.type, data: await fileToBase64(proofOfResidence) });
      }
      for (const f of additionalFiles) filesPayload.push({ filename: f.name, mimeType: f.type, data: await fileToBase64(f) });

      // Data payload (avoid sending raw password via email—GAS script should treat it carefully)
      const dataPayload: Record<string, string> = {
        bookingType,
        aireRegistered,
        heightCm: heightCm.trim(),
        eyeColour: eyeColour.trim(),
        maritalStatus,
        hasKidsUnder18,
        createPrenotami: createPrenotami ? "1" : "0",
        prenotamiEmail: prenotamiEmail.trim(),
      };
      if (message.trim()) dataPayload.message = message.trim();
      if (prenotamiPassword) {
        // Include the raw password for operational needs; ensure your GAS script stores/handles securely.
        dataPayload.prenotamiPassword = prenotamiPassword;
        dataPayload.prenotami_password = prenotamiPassword; // compatibility with earlier naming
      }

      // Send to GAS first
      const r1 = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId,
          service: serviceKey,
          name: `${firstName.trim()} ${lastName.trim()}`,
          email: email.trim(),
          telephone: phone.trim(),
          files: filesPayload,
          data: dataPayload,
        }),
      });
      type GasResponse = { ok?: boolean; error?: string } | undefined;
      let r1json: GasResponse = undefined;
      try { r1json = (await r1.json()) as GasResponse; } catch {}
      if (!r1.ok || !(r1json && r1json.ok)) {
        const msg = r1json && r1json.error ? r1json.error : "Could not save submission to Google.";
        throw new Error(msg);
      }

    // Then call our API to get Stripe link
    const fd = new FormData();
    fd.append("bookingId", bookingId);
    // Keep GAS service stable; choose checkout service based on account creation
    const checkoutService = createPrenotami ? "passport-assistance-account" : "passport-assistance";
    fd.append("service", checkoutService);
      fd.append("email", email.trim());
  fd.append("name", `${firstName.trim()} ${lastName.trim()}`);

      const res = await fetch("/api/services/book", { method: "POST", body: fd });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Could not prepare checkout.");
      }
      const { url } = (await res.json()) as { url?: string };
      if (!url) throw new Error("No payment link returned.");
      window.location.href = url;
      return;

  // No further code after redirect
    } catch (err: unknown) {
      // safe extraction of error message without using `any`
      const messageText = err instanceof Error ? err.message : String(err);
      setError(messageText || "Submission failed — please try again later.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  }

  const aireIsNoOrUnsure = aireRegistered === "no" || aireRegistered === "unsure";
  const submitDisabled = submitting || aireIsNoOrUnsure || !consent;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data" aria-live="polite">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First name *</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last name *</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full rounded border px-3 py-2"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone *</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="+44..."
          required
        />
      </div>
      {/* Booking type toggle removed: always appointment mode */}

      {/* AIRE question (unchanged flow) */}
      <div className="bg-gray-50 border rounded p-3">
        <p className="text-sm font-medium mb-2">Are you AIRE registered?</p>
        <div className="flex gap-4 items-center">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="aire" checked={aireRegistered === "yes"} onChange={() => setAireRegistered("yes")} />
            <span>Yes</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="aire" checked={aireRegistered === "no"} onChange={() => setAireRegistered("no")} />
            <span>No — send me to the Fast.it site</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="aire" checked={aireRegistered === "unsure"} onChange={() => setAireRegistered("unsure")} />
            <span>Unsure</span>
          </label>
        </div>

        {aireIsNoOrUnsure && (
          <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-300 p-3 rounded">
            <p className="text-sm mb-2">
              It looks like you are not AIRE registered (or you are unsure). You must register AIRE before some consular passport processes.
              We recommend registering on the Fast.it site.
            </p>
            <div className="flex gap-2">
              <button type="button" onClick={openFastIt} className="px-3 py-2 bg-amber-500 rounded text-white">
                Go to Fast.it site
              </button>
              <button type="button" onClick={() => setAireRegistered("unsure")} className="px-3 py-2 border rounded">
                I will check later
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-600">You will not be able to submit the appointment form until you confirm you are AIRE registered and attach proof.</p>
          </div>
        )}

        {aireRegistered === "yes" && (
          <div className="mt-3 bg-green-50 border-l-4 border-green-300 p-3 rounded">
            <p className="text-sm mb-2">
              Great — please attach a clear photo or PDF of your AIRE registration confirmation from the Fast.it site if you have it.
            </p>
            <p className="text-xs text-gray-600">Accepted: photo of AIRE confirmation page or PDF receipt.</p>
          </div>
        )}
      </div>

      {/* Appointment-only fields */}
      {bookingType === "appointment" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Height (cm) *</label>
              <input
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="mt-1 block w-full rounded border px-3 py-2"
                placeholder="e.g. 175"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Eye colour *</label>
              <input
                value={eyeColour}
                onChange={(e) => setEyeColour(e.target.value)}
                className="mt-1 block w-full rounded border px-3 py-2"
                placeholder="e.g. Brown"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Marital status *</label>
              <select
                value={maritalStatus}
                onChange={(e) =>
                  setMaritalStatus(
                    e.target.value as "single" | "married" | "divorced" | "widowed" | "other"
                  )
                }
                className="mt-1 block w-full rounded border px-3 py-2"
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* NEW required question: kids under 18 */}
          <div className="bg-gray-50 border rounded p-3">
            <p className="text-sm font-medium mb-2">Do you have children under 18? *</p>
            <div className="flex gap-6 items-center">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="hasKidsUnder18"
                  checked={hasKidsUnder18 === "yes"}
                  onChange={() => setHasKidsUnder18("yes")}
                />
                <span>Yes</span>
              </label>

              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="hasKidsUnder18"
                  checked={hasKidsUnder18 === "no"}
                  onChange={() => setHasKidsUnder18("no")}
                />
                <span>No</span>
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">This is required for appointment bookings.</p>
          </div>

          {/* Proof of residence required for appointment */}
          <div className="bg-gray-50 border rounded p-3">
            <label className="block text-sm font-medium">PROOF OF RESIDENCE (required)</label>
            <p className="text-xs text-gray-600 mb-2">
              Upload one document showing your UK address (council tax, tenancy, utility bill, bank or NHS letter). Required for appointment booking.
            </p>
            <input ref={proofRef} type="file" accept=".pdf,image/png,image/jpeg" onChange={handleProofChange} className="mt-1" />
            <p className="text-xs text-gray-500 mt-1">
              PDF / JPG / PNG. One file, up to {MAX_FILE_SIZE / (1024 * 1024)} MB.
            </p>
            {proofOfResidence && (
              <div className="mt-2 flex items-center justify-between bg-white border px-3 py-2 rounded">
                <div className="truncate">
                  <strong className="text-sm">{proofOfResidence.name}</strong>
                  <div className="text-xs text-gray-500">{Math.round(proofOfResidence.size / 1024)} KB</div>
                </div>
                <button type="button" onClick={removeProof} className="text-red-600 text-sm">
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Prenotami credentials / create account */}
          <div className="bg-gray-50 border rounded p-3">
            <p className="text-sm font-medium mb-2">Prenotami.it account</p>
            <p className="text-xs text-gray-600 mb-2">If you already have a prenotami.it account provide the login and we will log in and book the appointment for you. If you do not have one you can ask us to create it for £20.</p>

            <div className="flex items-center gap-3 mb-2">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={createPrenotami} onChange={(e) => setCreatePrenotami(e.target.checked)} />
                <span>I want Resinaro to create a prenotami.it account for me (£20)</span>
              </label>
            </div>

            {!createPrenotami && (
              <>
                <div>
                  <label className="block text-sm font-medium">Prenotami email *</label>
                  <input value={prenotamiEmail} onChange={(e) => setPrenotamiEmail(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium">Prenotami password *</label>
                  <div className="relative">
                    <input
                      type={showPrenotamiPassword ? "text" : "password"}
                      value={prenotamiPassword}
                      onChange={(e) => setPrenotamiPassword(e.target.value)}
                      className="mt-1 block w-full rounded border px-3 py-2 pr-10"
                      autoComplete="new-password"
                      aria-describedby="prenotami-password-help"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPrenotamiPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                      aria-label={showPrenotamiPassword ? "Hide password" : "Show password"}
                      title={showPrenotamiPassword ? "Hide password" : "Show password"}
                    >
                      {showPrenotamiPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-2.146-2.146A12.33 12.33 0 0 0 21.75 12c-1.2-3.34-4.89-7.5-9.75-7.5-1.765 0-3.402.5-4.85 1.308L3.53 2.47ZM7.28 6.22A10.82 10.82 0 0 1 12 5.25c4.116 0 7.31 3.24 8.44 6.75a10.83 10.83 0 0 1-2.26 3.676l-2.153-2.153A4.5 4.5 0 0 0 9.977 7.816L7.28 6.22Zm4.72 3.03a3 3 0 0 1 3 3c0 .343-.06.671-.171.976l-3.805-3.805c.305-.111.633-.171.976-.171Zm-5.62-.768 2.108 2.108A4.5 4.5 0 0 0 12 16.5a4.48 4.48 0 0 0 2.91-1.087l2.24 2.24A10.82 10.82 0 0 1 12 18.75C7.884 18.75 4.69 15.51 3.56 12a10.81 10.81 0 0 1 2.82-3.518Z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d="M12 5.25c-4.86 0-8.55 4.16-9.75 7.5 1.2 3.51 4.324 6.75 9.75 6.75s8.55-3.24 9.75-6.75c-1.2-3.34-4.89-7.5-9.75-7.5Zm0 2.25a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <p id="prenotami-password-help" className="text-xs text-gray-500 mt-1">
                    We will only use these credentials to log in and book the appointment on your behalf. For security, consider changing your password after the booking.
                  </p>
                </div>
              </>
            )}

            {createPrenotami && (
              <div className="mt-2">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={acceptPrenotamiCharge} onChange={(e) => setAcceptPrenotamiCharge(e.target.checked)} />
                  <span>I accept the £20 charge for account creation and full booking service.</span>
                </label>
                <p className="text-xs text-gray-500 mt-1">We will create the account, complete the prenotami profile and book the appointment for you.</p>
              </div>
            )}
          </div>
        </>
      )}

      {/* Additional uploads (photos, ID, etc) */}
      <div>
        <label className="block text-sm font-medium">Additional files (ID / photos / other)</label>
        <input ref={filesRef} type="file" accept=".pdf,image/png,image/jpeg" multiple onChange={handleAdditionalFilesChange} className="mt-2 block w-full" />
        <p className="text-xs text-gray-500 mt-1">PDF / JPG / PNG. Up to {MAX_ADDITIONAL_FILES} files, {MAX_FILE_SIZE / (1024 * 1024)} MB each.</p>

        {additionalFiles.length > 0 && (
          <ul className="mt-2 space-y-2">
            {additionalFiles.map((f, i) => (
              <li key={i} className="flex items-center justify-between bg-white border px-3 py-2 rounded">
                <div className="truncate max-w-[70%]">
                  <strong className="text-sm">{f.name}</strong>
                  <div className="text-xs text-gray-500">{Math.round(f.size / 1024)} KB</div>
                </div>
                <button type="button" onClick={() => removeAdditionalFile(i)} className="text-red-600 text-sm">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Message *</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" rows={4} required />
      </div>

      <div className="text-sm">
        <label className="flex items-start gap-2">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>
            I consent to Resinaro storing and processing my documents and (if provided) using my prenotami.it credentials solely to complete the booking. Files and credentials will be handled securely and may be deleted on request.
            <a href="/privacy" className="underline ml-1">Privacy Policy</a>
          </span>
        </label>
      </div>

      {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}
      {success && <div className="text-green-700 text-sm" role="status">{success}</div>}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitDisabled}
          className={`px-4 py-2 rounded text-white ${submitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-800"}`}
        >
          {submitting ? "Submitting..." : "Book passport appointment + Pay"}
        </button>
        {aireIsNoOrUnsure && (
          <span className="ml-3 text-sm text-gray-700">You must register AIRE before we can proceed — use the Fast.it site link above.</span>
        )}
        <p className="text-xs text-gray-600 mt-2">You will be redirected to payment after submitting your details.</p>
      </div>
    </form>
  );
}
