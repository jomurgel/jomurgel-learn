import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Jo Murgel',
  description: 'A mixed-stack javascript developer.',
  openGraph: {
    title: 'About Jo Murgel',
    description: 'A mixed-stack javascript developer.',
  },
}

const About = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="About Jo Murgel">
            <small>*<em>(they/them)</em></small><br/>
            Hello, I'm Jo Murgel.
          </h1>
          <p>I'm a mixed-stack javascript engineer, artist, and educator living in Boise, ID.</p>
          <Image
            src="/about-photo.jpg"
            alt="A photo of tattooed legs draped over the edge of a cliff overlooking rocks and the Snake river."
            post-image="true"
            width={400}
            height={266.67}
            priority={true}
            style={{
              width: '100%',
              maxWidth: 400,
              maxHeight: 266.67,
              height: 'auto',
            }}
          />
        </header>
      </section>

      <hr />

      <section>
        <h2>TL;DR</h2>

        <p>I'm currently available for hire, but you probably know that. Let's get in <Link href="/contact">contact</Link> and start a conversation.</p>

        <p>Here are the highlights. I'm a mixed-stack JavaScript engineer. What does that mean? It means that I don't specialize, and while I prefer JavaScript over any other language, I'm familiar with a wide range of languages and tech stacks (more on that below). My mission is to leave the world better than I found it. That's sometimes hard to imagine in tech, but it's not about the work but the people. </p>

        <p>A little more info below and in the <Link href="/codex">codex</Link>.</p>
      </section>

      <hr />

      <section>
        <h2>...and now you know the rest of the story</h2>

        <p>I'm a Venn diagram, where my professional and personal lives overlap, which I think makes me a fairly balanced individual, but I don't specialize. I take the long and well-informed route which always pays off in the end (always). Once upon a time, I called myself a "Jo of all trades," but it's often misinterpreted or seen as a negative attribute.</p>

        <blockquote data-type="blockquote">
          A jack of all trades is a master of none, but oftentimes better than a master of one.
          <cite>Robert Greene's quote in his 1592 booklet <em>Greene's Groats-Worth of Wit</em></cite>
        </blockquote>

        <p>Don't get me wrong, for those who become experts in one field or technology, my hats off to you, but that's not how I'm wired. I cannot be beholden to one endeavor any more than I can be beholden to one type of pizza (gluten-free pepperoni and pineapple, if you please). I'm fluent, conversational, and familiar with various languages and tech stacks (callback), allowing me to be more versatile than your average Jo. I have the drive to learn, an imagination unrestricted by convention, and the unique ability to look at a project from every relevant angle. Being a "Jo of all trades" means being prepared and informed for whatever gets thrown my way.</p>

        <div data-table data-style="list">
          <div data-attr="header">
            <div>
              <h3>Fluent</h3>
              <p>Including, but not limited to.</p>
            </div>
          </div>
          <div data-attr="row">
            <div data-attr="column"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS</a></div>
            <div data-attr="column"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">Semantic HTML</a></div>
            <div data-attr="column"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a></div>
            <div data-attr="column"><a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer">SQL</a></div>
            <div data-attr="column"><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a></div>
            <div data-attr="column"><a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">Jest</a></div>
            <div data-attr="column"><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a></div>
            <div data-attr="column"><a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node</a></div>
            <div data-attr="column"><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a></div>
            <div data-attr="column"><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SCSS</a></div>
            <div data-attr="column"><a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress</a></div>
            <div data-attr="column"><a href="https://www.a11yproject.com/" target="_blank" rel="noopener noreferrer">A11Y</a></div>
            <div data-attr="column"><a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a></div>
            <div data-attr="column"><a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">MySQL</a></div>
            <div data-attr="column"><a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">PHP</a></div>
            <div data-attr="column"><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a></div>
          </div>
        </div>

        <div data-table data-style="list">
          <div data-attr="header">
            <div>
              <h3>Conversational</h3>
              <p>Have had past experience with or are currently learning.</p>
            </div>
          </div>
          <div data-attr="row">
            <div data-attr="column"><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a></div>
            <div data-attr="column"><a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer">Ruby</a></div>
            <div data-attr="column"><a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">React Native</a></div>
          </div>
        </div>

        <p>A person is nothing without a community. I believe in open-source, giving young engineers the tools to mold themselves and leaving the space I occupy better than how I found it for the next generation. There is no one-size-fits-all approach to learning, so I take the time to learn and engage with the people around me so that each formed relationship is unique. This statement will be a little heady, but learning comes from trust, trust is grown from understanding people, and understanding comes from knowing that without community, we get lost in a cycle of redundancy and lose our grasp on progress.</p>

        <p>As I've gotten older, my focus has been on people. Professionally speaking, I help junior developers learn the technical aspects of their job and the intrinsic properties of being a well-rounded engineer. As we progress in our career (any career), we take how we got there for granted. We got there with the help and support of other people (even if we don't think so), and I'm a little sad to see how closed off we've made the world for anyone just starting or trying to get ahead, so I attempt to be a beacon when I can for other engineers for this reason.</p>

        <p>I am (or try to be) as holistic as I can. Professionally, that means understanding all aspects of a task. Personally, that means understanding how I and my actions æffect everything around me and where I fit into the world (the small small part that I occupy). I'm an artist at heart, and my art takes many forms; while I find inspiration in the outdoors and being active by biking, running, and strength training (I also occasionally camp; after all, I do live in Idaho), it's the people around me that I draw the most inspiration from. Without them, I wouldn't be the person I am today.</p>
      </section>
    </main>
  )
}

export default About
