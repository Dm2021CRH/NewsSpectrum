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

  <!-- How Outlets Headlined It -->
  <section class="py-8 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-2xl font-bold mb-2">How Outlets Headlined It</h2>
      <p class="text-sm text-gray-600 mb-6">Exact headlines from major sources</p>
      <div class="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        <!-- Your three headline cards here — same as before -->
        <!-- (they were in your original HTML, just copy them back) -->
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
