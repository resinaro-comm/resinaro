export default function CommunityStories() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Community Stories</h1>
  <p className="mb-8 text-lg">Real experiences and testimonials from the Resinaro community.</p>
        <div className="space-y-8 mb-12">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Maria from Rome</h2>
            <p>Maria struggled with NHS registration and felt lost in the system. Resinaro guided her step-by-step, helping her access healthcare and feel at home in the UK.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Ahmed from Morocco</h2>
            <p>Ahmed found belonging at Resinaro events, making friends and building a support network that made London feel like home.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Sofia from Naples</h2>
            <p>Sofia was connected to Italian-speaking mental health resources through Resinaro, helping her overcome isolation and thrive in her new community.</p>
          </div>
        </div>
        <div className="bg-green-900 text-white p-6 rounded shadow text-center">
          <h3 className="text-2xl font-bold mb-2">Want to share your story?</h3>
          <p>Contact us to be featured.</p>
        </div>
      </div>
    </main>
  );
}
