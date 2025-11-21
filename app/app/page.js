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
jsx<section class="py-8 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-2xl font-bold mb-2">How Outlets Headlined It</h2>
      <p class="text-sm text-gray-600 mb-6">Exact headlines from major sources</p>
      <div class="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        <div class="snap-center shrink-0 w-80 bg-white rounded-xl shadow p-5 border">
          <div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-red-600 rounded"></div><div class="font-bold">CNN · 2h ago</div></div>
          <p class="text-sm leading-tight">"Another Preventable Tragedy in City Starved of Resources..."</p>
          <div class="mt-3 text-xs font-medium text-blue-600">Bias 2.8 / 10</div>
        </div>
        <div class="snap-center shrink-0 w-80 bg-white rounded-xl shadow p-5 border">
          <div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-blue-700 rounded"></div><div class="font-bold">Fox News · 1h ago</div></div>
          <p class="text-sm leading-tight">"Soft-on-Crime Democrat Policies Claim Another Innocent Life..."</p>
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
        `,
      }}
    />jsx<section class="py-10 bg-white border-t-4 border-b-4 border-primary">
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
        `,
      }}
    />
  );
}
  );
}
jsx<section class="py-10 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-2">The Mainstream Spectrum</h2>
      <p class="text-gray-600 mb-8">What each outlet emphasized — and what they left out</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white border rounded-xl p-6 shadow">
          <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-red-600 rounded"></div><div class="font-bold">CNN</div></div>
          <p class="font-semibold text-green-700 text-sm">Key Quote</p>
          <p class="text-sm italic mb-3">"Decades of disinvestment have left communities without the mental-health and youth programs..."</p>
          <p class="font-semibold text-red-700 text-sm">Unique in Their Story</p>
          <p class="text-sm">CNN uniquely included data on Chicago's $200M cut in mental health funding since 2015, with interviews from community activists on youth violence prevention — a socio-economic lens not in Fox News's policy blame or Reuters's timeline focus.</p>
          <p class="text-xs text-gray-500 mt-3">Sarah Kline · 14 yrs</p>
        </div>
        <div class="bg-white border rounded-xl p-6 shadow">
          <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-blue-700 rounded"></div><div class="font-bold">Fox News</div></div>
          <p class="font-semibold text-green-700 text-sm">Key Quote</p>
          <p class="text-sm italic mb-3">"This is what happens when you defund police and let violent offenders walk free..."</p>
          <p class="font-semibold text-red-700 text-sm">Unique in Their Story</p>
          <p class="text-sm">Fox News uniquely cited 2023 bail reform stats (40% recidivism rate in South Side cases), with commentary from law enforcement unions — an accountability angle absent from CNN's social funding emphasis or BBC's international comparison.</p>
          <p class="text-xs text-gray-500 mt-3">John Doe · 12 yrs</p>
        </div>
        <div class="bg-white border rounded-xl p-6 shadow">
          <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-gray-800 rounded"></div><div class="font-bold">Reuters</div></div>
          <p class="font-semibold text-green-700 text-sm">Key Quote</p>
          <p class="text-sm italic mb-3">"Police responded at 8:42 p.m.; the victim was pronounced dead at the hospital."</p>
          <p class="font-semibold text-red-700 text-sm">Unique in Their Story</p>
          <p class="text-sm">Reuters uniquely provided a minute-by-minute police radio transcript and court docket details, which CNN and Fox News skipped for narrative — a procedural focus making it objective but omitting policy debates.</p>
          <p class="text-xs text-gray-500 mt-3">Jane Smith · 20 yrs</p>
        </div>
      </div>
    </div>
  </section>
        `,
      }}
    />
  );
}
jsx<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white border rounded-xl p-6 shadow">
      <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-orange-600 rounded"></div><div class="font-bold">The Australian</div></div>
      <p class="font-semibold text-green-700 text-sm">Key Quote</p>
      <p class="text-sm italic mb-3">"Yet another example of America's inner-city breakdown making headlines worldwide."</p>
      <p class="font-semibold text-red-700 text-sm">Unique in Their Story</p>
      <p class="text-sm">The Australian uniquely framed it as a global embarrassment, comparing it to Australian crime trends and quoting experts on "exportable lessons" for Sydney — an outsider’s view not in U.S.-centric CNN or Fox News.</p>
      <p class="text-xs text-gray-500 mt-3">Emma Wilson · 11 yrs</p>
    </div>
    <div class="bg-white border rounded-xl p-6 shadow">
      <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-black rounded"></div><div class="font-bold">BBC</div></div>
      <p class="font-semibold text-green-700 text-sm">Key Quote</p>
      <p class="text-sm italic mb-3">"Chicago continues to grapple with high levels of violent crime."</p>
      <p class="font-semibold text-red-700 text-sm">Unique in Their Story</p>
      <p class="text-sm">BBC uniquely compared it to London's knife crime epidemics, with UK Home Office data — a cross-cultural angle not in Al Jazeera's inequality focus or CNBC's economic impact.</p>
      <p class="text-xs text-gray-500 mt-3">David Smith · 18 yrs</p>
    </div>
    <div class="bg-white border rounded-xl p-6 shadow">
      <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-teal-700 rounded"></div><div class="font-bold">Al Jazeera English</div></div>
      <p class="font-semibold text-green-700 text-sm">Key Quote</p>
      <p class="text-sm italic mb-3">"Another deadly incident in a city plagued by systemic inequality and gun violence."</p>
      <p class="font-semibold text-red-700 text-sm">Unique in Their Story</p>
      <p class="text-sm">Al Jazeera uniquely highlighted racial disparities, quoting activists on "redlining's legacy" and comparing it to Rio de Janeiro — a human rights lens not in BBC's overview or The Young Turks' policy rants.</p>
      <p class="text-xs text-gray-500 mt-3">Aisha Khan · 10 yrs</p>
    </div>
  </div>
        `,
      }}
    />
  );
}
