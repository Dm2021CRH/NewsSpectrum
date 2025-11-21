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
      <h1 class="text-4xl md:text-5xl font-bold">Fatal Stabbing on Chicago's South Side</h1>
    </div>
  </div>

  <!-- How Outlets Headlined It -->
  <section class="py-8 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-2xl font-bold mb-2">How Outlets Headlined It</h2>
      <p class="text-sm text-gray-600 mb-6">Exact headlines from major sources</p>
      <div class="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        <div class="snap-center shrink-0 w-80 bg-white rounded-xl shadow p-5 border">
          <div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-red-600 rounded"></div><div class="font-bold">CNN · 2h ago</div></div>
          <p class="text-sm leading-tight">"Another Preventable Tragedy in City Starved of Resources and Overwhelmed by Gun Violence Crisis"</p>
          <div class="mt-3 text-xs font-medium text-blue-600">Bias 2.8 / 10</div>
        </div>
        <div class="snap-center shrink-0 w-80 bg-white rounded-xl shadow p-5 border">
          <div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-blue-700 rounded"></div><div class="font-bold">Fox News · 1h ago</div></div>
          <p class="text-sm leading-tight">"Soft-on-Crime Democrat Policies Claim Another Innocent Life in Lawless Chicago"</p>
          <div class="mt-3 text-xs font-medium text-red-600">Bias 7.2 / 10</div>
        </div>
        <div class="snap-center shrink-0 w-80 bg-white rounded-xl shadow p-5 border">
          <div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-gray-800 rounded"></div><div class="font-bold">Reuters · 3h ago</div></div>
          <p class="text-sm leading-tight">"Man Fatally Stabbed in Chicago, Suspect in Custody"</p>
          <div class="mt-3 text-xs font-medium text-gray-600">Bias 4.1 / 10</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Undisputed Facts -->
  <section class="py-10 bg-white border-t-4 border-b-4 border-primary">
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-3">Undisputed Facts</h2>
      <p class="text-center text-sm text-gray-600 mb-8">
        Verified timeline — Sources: 
        <a href="#" class="text-primary underline">Chicago PD Press Release</a> · 
        <a href="#" class="text-primary underline">Cook County Court Records</a> · 
        <a href="#" class="text-primary underline">ABC7 Chicago Footage</a>
      </p>
      <div class="space-y-6 text-lg">
        <div class="flex items-start gap-4">
          <span class="text-primary font-bold">•</span>
          <div>
            <strong>November 15, 2025 – 8:42 PM</strong><br>
            28-year-old male stabbed multiple times at 63rd & Halsted, South Side Chicago
          </div>
        </div>
        <div class="flex items-start gap-4">
          <span class="text-primary font-bold">•</span>
          <div>
            <strong>8:47 PM</strong><br>
            Officers arrive; suspect arrested on scene with knife
          </div>
        </div>
        <div class="flex items-start gap-4">
          <span class="text-primary font-bold">•</span>
          <div>
            <strong>November 17, 2025</strong><br>
            Bail set at $500,000. No prior violent convictions
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- The Mainstream Spectrum -->
  <section class="py-10 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-2">The Mainstream Spectrum</h2>
      <p class="text-gray-600 mb-8">What each outlet emphasized — and what they left out</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white border rounded-xl p-6 shadow">
          <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-red-600 rounded"></div><div class="font-bold">CNN</div></div>
          <p class="font-semibold text-green-700 text-sm">Key Quote</p>
          <p class="text-sm italic mb-3">"Decades of disinvestment have left communities without the mental-health and youth programs..."</p>
          <p class="font-semibold text-red-700 text-sm">Omitted</p>
          <p class="text-sm">Victim’s criminal history</p>
        </div>
        <div class="bg-white border rounded-xl p-6 shadow">
          <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-blue-700 rounded"></div><div class="font-bold">Fox News</div></div>
          <p class="font-semibold text-green-700 text-sm">Key Quote</p>
          <p class="text-sm italic mb-3">"This is what happens when you defund police..."</p>
          <p class="font-semibold text-red-700 text-sm">Omitted</p>
          <p class="text-sm">Poverty rates</p>
        </div>
        <div class="bg-white border rounded-xl p-6 shadow">
          <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-gray-800 rounded"></div><div class="font-bold">Reuters</div></div>
          <p class="font-semibold text-green-700 text-sm">Key Quote</p>
          <p class="text-sm italic mb-3">"Police responded at 8:42 p.m.; the victim was pronounced dead at the hospital."</p>
          <p class="font-semibold text-red-700 text-sm">Omitted</p>
          <p class="text-sm">Minimal policy commentary</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Independent Voices -->
  <section class="py-10 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-2">Independent Voices</h2>
      <p class="text-gray-600 mb-8">What creators outside traditional media are saying</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white border rounded-xl p-6 shadow">
          <h3 class="font-bold text-orange-600 mb-2">YouTube Creator</h3>
          <p class="font-medium">Tim Pool – Timcast IRL (1.4M subs)</p>
          <p class="text-sm italic mt-3">"Chicago keeps voting for the same policies and wonders why bodies keep dropping."</p>
          <p class="text-xs text-gray-600 mt-3">Unique: Ties directly to 2020 bail-reform law</p>
        </div>
        <div class="bg-white border rounded-xl p-6 shadow">
          <h3 class="font-bold text-purple-600 mb-2">Podcast</h3>
          <p class="font-medium">Breaking Points – Krystal & Saagar</p>
          <p class="text-sm italic mt-3">"Both parties have failed these communities — one ignores crime, the other ignores poverty."</p>
          <p class="text-xs text-gray-600 mt-3">Unique: Blames bipartisan failure</p>
        </div>
        <div class="bg-white border rounded-xl p-6 shadow">
          <h3 class="font-bold text-green-600 mb-2">Blog / Substack</h3>
          <p class="font-medium">Matt Taibbi – Racket News</p>
          <p class="text-sm italic mt-3">"Local reporters told me off-record the victim had gang ties — none of that will appear in print."</p>
          <p class="text-xs text-gray-600 mt-3">Unique: Reveals suppressed info</p>
        </div>
      </div>
    </div>
  </section>

  <!-- What People Are Saying -->
  <section class="py-10 bg-black text-white">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">What People Are Saying</h2>
      <div class="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        <div class="snap-center shrink-0 w-80 bg-gray-900 rounded-xl p-5">
          <p class="text-sm mb-4">"Finally a site that shows all sides without the spin. Bookmarked."</p>
          <a href="#" class="text-blue-400 text-xs hover:underline">@truthseeker88 on BlueSky →</a>
        </div>
        <div class="snap-center shrink-0 w-80 bg-gray-900 rounded-xl p-5">
          <p class="text-sm mb-4">"About time someone called out the media lies."</p>
          <a href="#" class="text-blue-400 text-xs hover:underline">@MAGAWarrior22 on Truth Social →</a>
        </div>
        <div class="snap-center shrink-0 w-80 bg-gray-900 rounded-xl p-5">
          <p class="text-sm mb-4">"This format is the future of news."</p>
          <a href="#" class="text-blue-400 text-xs hover:underline">@realist99 on X →</a>
        </div>
        <div class="snap-center shrink-0 w-80 bg-gray-900 rounded-xl p-5">
          <p class="text-sm mb-4">"Refreshing to see actual quotes side-by-side."</p>
          <a href="#" class="text-blue-400 text-xs hover:underline">u/NeutralObserver on Reddit →</a>
        </div>
        <div class="snap-center shrink-0 w-80 bg-gray-900 rounded-xl p-5">
          <p class="text-sm mb-4">"Shared this with my whole group chat. Everyone needs to see this."</p>
          <a href="#" class="text-blue-400 text-xs hover:underline">John D. on Facebook →</a>
        </div>
      </div>
    </div>
  </section>

</body>
</html>
        `,
      }}
    />
  );
}
