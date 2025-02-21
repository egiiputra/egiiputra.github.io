<script lang="ts">

const skills = {
    'Web Development': [
    'Landing pages and business websites',
    'LMS website',
    'Admin dashboard'
    ],
    'Machine Learning': [
    'Sentiment Analysis',
    'Image classifications',
    'Image segmentation'
    ],
    'DevOps': [
    'Dockerize web applications',
    'Integrate docker containers with docker compose'
    ]
};

let openItem: string = $state('');

const toggleItem = (item: string) => {
    openItem = (openItem === item) ? '' : item;
};
$inspect(openItem)

</script>

<div class="text-left pt-3 md:pt-9">
    <h3 class="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">What I do?</h3>
    <ul class="space-y-4 mt-4 text-lg">
    {#each Object.entries(skills) as [category, items] }
        <li data-cateogry={category} class="w-full">
        <button
            onclick={() => toggleItem(category)}
            class="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
        >
            <div class="flex items-center gap-3 p-4">
            <div class="flex items-center gap-2 flex-grow justify-between">
                <div class="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                <span class="block truncate text-[var(--white)] text-lg">
                    {category}
                </span>
                </div>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                class={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                    openItem === category ? 'rotate-180' : ''
                }`}
                >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
            </div>
            </div>

            <div 
            class="transition-all duration-300 px-4 {
                openItem === category ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'
            }"
            >
            <ul class="space-y-2 text-[var(--white-icon)] text-sm">
                {#each items as item}
                    <div class="flex items-center">
                        <span class='pl-1'>•</span>
                        <li class="pl-3">{item}</li>
                    </div>
                {/each}
            </ul>
            </div>
        </button>
        </li>
    {/each}
    </ul>
</div>