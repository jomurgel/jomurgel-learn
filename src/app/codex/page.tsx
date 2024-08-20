import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Jo Murgel Codex',
  description: 'A list of follows, faves, and other information.',
  openGraph: {
    title: 'About Jo Murgel',
    description: 'A list of follows, faves, and other information.',
  },
}

const Codex = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="The Jo Murgel COdex">
            Nobody asked for it, but I &hearts; this stuff...
          </h1>
          <p>A compiled list of likes and general favorites in no particular order of importance.</p>
        </header>
      </section>

      <hr />

      <section>
        <h2>Music</h2>
        <p><a href="https://open.spotify.com/album/6BK3muExDOuk0VnyMn9NVw?si=x-fq2btXSO-DxK0xZWIMLg" target="_blank" rel="noopener noreferrer">Kintsugi</a> by Death Cab for Cutie always feels like an album I need when I need a chill vibe. My music otherwise ebbs and flows. I'm not particularly musical myself, so I like music based on how it makes me feel. I like a lot of individual songs, fewer full albums, and even fewer actual bands.</p>

        <h2>Books</h2>
        <p>I prefer audiobooks, but have gotten into physical (hardcover) books recently. I'm currently reading through the <a href="https://www.harpercollins.com/collections/books-series-the-lady-janies" target="_blank" rel="noopener no referrer">Jane series</a>, because I'm a teenage girl. They're quite fun.</p>

        <ul>
          <li>My Lady Name</li>
          <li>My Plain Jane</li>
          <li>My Calamity Jane</li>
          <li>My Imaginary Mary</li>
          <li>My Contrary Mary</li>
          <li>My Salty Mary</li>
        </ul>

        <p>I also quite liked Ready Player One and Ready Player Two by Ernest Cline.</p>

        <h2>Movie</h2>
        <p>I love movies in general, but <a href="https://www.imdb.com/title/tt2543164/" target="_blank" rel="noopener noreferrer">Arrival</a>, starring Amy Adams and Jeremy Renner, directed by Denis Villeneuve, and an amazing score by the late Jóhann Jóhannsson.</p>

        <h2>Photographers</h2>
        <p><a href="https://en.wikipedia.org/wiki/Ruth_Bernhard" target="_blank" rel="noopener noreferrer">Ruth Bernhard</a>, no contest. Close seconds would be <a href="https://www.instagram.com/jisobeldelisle/?hl=en" target="_blank" rel="noopener noreferrer">J. Isobel de Lisle</a> and <a href="https://www.zhangjingna.com/" target="_blank" rel="noopener noreferrer">Jingna Zhang</a> right now.</p>

        <h2>Podcasts</h2>
        <p>I use <a href="" target="_blank" rel="noopener noreferrer">PocketCasts</a> and listen to these regularly:</p>

        <ul>
          <li><a href="https://www.heyriddleriddle.com/" target="_blank" rel="noopener noreferrer">Hey, Riddle Riddle</a></li>
          <li><a href="https://www.dungeonsanddaddies.com/" target="_blank" rel="noopener noreferrer">Dungeons & Daddies</a></li>
          <li><a href="https://www.theverge.com/the-vergecast" target="_blank" rel="noopener noreferrer">The Vergecast</a></li>
          <li><a href="https://podmeetsworldshow.com/" target="_blank" rel="noopener noreferrer">Pod Meets World</a></li>
          <li><a href="https://techpod.content.town/" target="_blank" rel="noopener noreferrer">Brad and Will Made a Tech Pod</a></li>
        </ul>
      </section>
    </main>
  )
}

export default Codex
