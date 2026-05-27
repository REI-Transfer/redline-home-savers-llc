import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export const metadata = {
  title: `What's The Catch With A Cash Offer? | ${config.companyName}`,
  description:
    "No repairs, no fees, no showings. Here is where the money actually comes from, and what the real trade-off is.",
}

export default function Page() {
  const area = config.marketName || "the areas we serve"
  return (
    <ArticleShell
      title="What's The Catch With A Cash Offer? An Honest Look At Why It Sounds Too Good To Be True"
      dek="No repairs, no fees, no showings. Here is where the money actually comes from, and what the real trade-off is."
      companyName={config.companyName}
    >
      <P>
        Let us be honest about the gut reaction. When someone says they will buy your house as-is, for
        cash, with no repairs, no commission, no fees, and a closing date you choose, a sensible part
        of your brain says, hold on, what is the catch?
      </P>
      <P>
        That instinct is healthy. Anything that sounds too good to be true usually is. So we are not
        going to talk around it. We are going to tell you exactly where the money comes from, and what
        the real trade-off is, because there is one, and you deserve to understand it before you decide.
      </P>

      <ArticleImage
        src="/images/adv-couple-kitchen.jpg"
        alt="An older couple talking through a decision at their kitchen table"
        caption="The honest answer to what is the catch is simpler, and far less sinister, than most people fear."
      />

      <H2>Where Does the Money Actually Come From?</H2>
      <P>
        A real cash buyer is a business. We buy a home that needs work, we put our own money into
        fixing it up, and then we sell or rent it. The difference between what we pay you and what the
        finished home is worth, minus the cost of all that work and the months of risk, is how we make
        a living.
      </P>
      <P>
        That is the whole model. It is not a trick. It is the same way any business buys something,
        improves it, and resells it. We are simply doing it with houses, and taking on the repairs and
        the risk that you would otherwise have to carry yourself.
      </P>

      <H2>So Here Is the Real Trade-Off, Stated Plainly</H2>
      <P>
        The honest catch is this. The cash number on paper is usually lower than the dream sticker
        price you might chase on the open market after fixing everything up.
      </P>
      <P>
        That is the trade. In exchange for that, you get all of this:
      </P>
      <UL>
        <li>You pay nothing for repairs. We take the home exactly as it sits.</li>
        <li>You pay no agent commission and no closing costs.</li>
        <li>You skip every showing and open house, and keep your privacy.</li>
        <li>You close in weeks, not months, on a date you choose.</li>
        <li>You get certainty. The written number does not crumble at the table.</li>
      </UL>
      <P>
        So the catch is not hidden fees or a shrinking offer. The catch is a fair trade. You give up a
        shot at the highest possible price in exchange for speed, certainty, and zero hassle.

      </P>

      <H2>Why That Trade Is a Bargain for the Right Home</H2>
      <P>
        Here is the part that flips the whole thing on its head. For a home that needs work, that dream
        sticker price was never really sitting there waiting for you. To chase it, you would first have
        to pour cash into repairs, wait months while it sits, pay commission, and pray the deal holds.
      </P>
      <P>
        Once you subtract all of that from the sticker, the real net you would have kept is far closer
        to the cash offer than it first appeared. For plenty of homeowners across {area}, after the
        dust settles, the cash route nets nearly the same money with a fraction of the stress.
      </P>

      <ArticleImage
        src="/images/adv-dated-kitchen.jpg"
        alt="A dated kitchen in an older home that needs work"
        caption="For a home that needs work, the high sticker price was never really within reach without spending first."
      />

      <H2>When the Cash Route Is Not Your Best Move</H2>
      <P>
        We will be straight with you about this too. A cash sale is not always the right answer. If your
        home is already in great shape, and you have the time and the patience to list it the
        traditional way, you may well net more by doing exactly that.
      </P>
      <P>
        A good cash buyer will tell you so. If listing is genuinely your stronger move, we would rather
        say it out loud than talk you into a sale that does not serve you. That honesty is part of how
        you tell a real buyer from one chasing a quick contract.
      </P>

      <H2>The Bottom Line on the Catch</H2>
      <P>
        The catch is a fair trade, not a trap. You trade a shot at the highest possible price for speed,
        certainty, no repairs, no fees, and total control of the timeline. For a dated home and an
        owner who values their time, that trade is usually a very good deal.
      </P>
      <P>
        The smart move is simply to get your number, understand exactly how it was built, and weigh it
        against your real net from listing. There is no cost and no obligation in finding out, and
        knowing always beats guessing.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="No catch. Just a number and the math behind it."
        subheading={`Text us the word ${config.smsKeyword} or call. We will explain exactly how your offer works. No cost, no obligation.`}
      />
    </ArticleShell>
  )
}
