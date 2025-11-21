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
  <title>Fatal Stabbing on Chicago's South Side – NewsSpectrum</title>
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
      <h1 class="text-4xl md:text-5xl font-bold">Fatal Stabbing on Chicago's South Side</h1>
    </div>
  </div>
        `,
      }}
    />
  );
}
