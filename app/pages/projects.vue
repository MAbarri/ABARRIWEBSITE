<script setup lang="ts">
const {data: page} = await useAsyncData('index', () => {
  return queryCollection('index').first()
})

const {global} = useAppConfig()

useSeoMeta({
  title: 'Projects - Mohamed Abarri',
  ogTitle: 'Projects - Mohamed Abarri',
  description: 'Explore my featured projects including Drawnaq AI Design SaaS and EmailWand Email Verification SaaS. See how I build innovative solutions with AI, blockchain, and modern web technologies.',
  ogDescription: 'Explore my featured projects including Drawnaq AI Design SaaS and EmailWand Email Verification SaaS. See how I build innovative solutions with AI, blockchain, and modern web technologies.',
  ogImage: '/__og-image__/projects.jpg',
  twitterImage: '/__og-image__/projects.jpg',
  twitterCard: 'summary_large_image'
})

</script>

<template>
  <div class="flex flex-col items-center py-18 sm:py-24 lg:py-32">

    <section class="flex flex-col isolate gap-8 max-w-3xl">

      <div class="pb-4">

        <h1 class="tracking-tight font-bold text-highlighted max-w-xl text-pretty text-xl sm:text-2xl lg:text-3xl text-left">
          {{ global.projectsTitle }}
        </h1>

        <div class="text-md max-w-2xl sm:text-md text-muted text-balance mt-6 text-left">
          {{ global.projectsDescription }}
        </div>

        <div class="mt-6">
          <div class="flex flex-wrap gap-x-6 gap-y-3 justify-start">
            <div class="flex items-center gap-2">
              <UButton
                  label="Email me"
                  :to="`mailto:${global.email}`"
              />
            </div>
          </div>
        </div>
      </div>

      <template v-for="(project, index) of page.featuredProjects" :key="index">
        <LandingFeaturedProject :project="project" :index="index"/>
      </template>
    </section>

  </div>
</template>