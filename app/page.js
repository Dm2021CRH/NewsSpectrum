export default function Home() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chicago South-Side Stabbing: Unbiased Breakdown – NewsSpectrum</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { colors: { primary: '#1d4ed8' } } } }
  </script>
  <style>
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
  </style>
</head>
<body class="bg-gray-50 text-gray-900">

  <!-- Header -->
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-primary">NewsSpectrum</h1>
      <nav class="space-x-8 text-lg hidden md:block">
        <a href="/" class="text-gray-600 hover:text-primary">Home</a>
        <a href="/about" class="text-gray-600 hover:text-primary">About</a>
      </nav>
    </div>
  </header>

  <!-- Unbiased Title -->
  <div class="bg-primary text-white py-10">
    <div class="max-w-5xl mx-auto px-4 text-center">
      <p class="text-sm uppercase tracking-wider mb-2 opacity-90">Homicide · Chicago, Illinois · November 15, 2025</p>
      <h1 class="text-4xl md:text-5xl font-bold">Fatal Stabbing on Chicago's South Side: What We Know</h1>
    </div>
  </div>

  {/* How Outlets Headlined It */}
<section className="py-8 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-2">How Outlets Headlined It</h2>
    <p className="text-sm text-gray-600 mb-6">
      Exact headlines from major sources
    </p>

    <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
      {/* ← Put your three headline cards here */}
      {/* Example card (copy your real ones): */}
      <div className="snap-start flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-600 rounded-full"></div>
          <div>
            <p className="font-semibold">CNN</p>
            <p className="text-xs text-gray-500">2 hours ago</p>
          </div>
        </div>
        <p className="text-lg font-medium">
          “Breaking: Major headline exactly as published”
        </p>
      </div>

      {/* Add the other two cards the same way */}
    </div>
  </div>
</section>

  <!-- Undisputed Facts -->
  <section class="py-10 bg-white border-t-4 border-b-4 border-primary">
    <!-- Your full Undisputed Facts section — copy from your old index.html -->
  </section>

  <!-- Mainstream Spectrum — ALL 8 sources -->
  <section class="py-10 bg-white">
    <!-- Your full Mainstream Spectrum with CNN, Fox, Australian, BBC, Al Jazeera, NPR, CNBC, Young Turks -->
  </section>

  <!-- Independent Voices -->
  <section class="py-10 bg-gray-100">
    <!-- Your three Independent boxes -->
  </section>

  <!-- What People Are Saying -->
  <section class="py-10 bg-black text-white">
    <!-- Your five comment carousel -->
  </section>
  </>
  );
}
