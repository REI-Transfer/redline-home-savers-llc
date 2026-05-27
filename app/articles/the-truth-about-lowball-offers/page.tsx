import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export const metadata = {
  title: `The Truth About 'Lowball' Cash Offers | ${config.companyName}`,
  description:
    "How a fair cash offer is really calculated, and why the net you actually keep matters far more than the sticker price on the sign.",
}

export default function Page() {
  const area = config.marketName || "the areas we serve"
  return (
    <ArticleShell
      title="The Truth About 'Lowball' Cash Offers, From the People Who Actually Make Them"
      dek="How a fair cash offer is really put together, and why the money you keep matters more than the number on the sign."
      companyName={config.companyName}
    >
      <P>
        Let us name the worry out loud, because everyone has it. Cash buyers lowball you. They prey on
        people in a tough spot, dangle a number far below what the place is worth, and walk off with
        the difference.
      </P>
      <P>
        It is a fair thing to be wary of. There are sloppy operators in every line of work, and real
        estate is no exception. So instead of asking you to take our word for it, we are going to do
        something different. We are going to show you exactly how a real cash offer is built, line by
        line, so you can judge any number you ever get for yourself.
      </P>
      <P>
        Once you see the math, the word lowball starts to mean something more useful than just a low
        number. It starts to mean an unfair one. And those are not the same thing.
      </P>

      <ArticleImage
        src="/images/adv-handshake.jpg"
        alt="A homeowner and a local buyer shaking hands over a fair offer"
        caption="A fair offer is not the biggest number anyone can say out loud. It is the one you can actually count on."
      />

      <H2>The Sticker Price Is a Trap Nobody Warns You About</H2>
      <P>
        When most people think about what their home is worth, they picture the price on a listing
        sign. That number feels like the truth. It is not. It is the asking price, the dream figure,
        the spot where negotiating begins. It is not the money that ends up in your account.
      </P>
      <P>
        Between that sign and your bank balance sits a whole gauntlet of costs nobody puts on the
        sign. To compare a cash offer honestly, you have to compare what you actually walk away with,
        not what the sign says.
      </P>

      <H2>What Gets Quietly Carved Off the Top of a Listing</H2>
      <P>Here is what a traditional sale skims before a dollar reaches you:</P>
      <UL>
        <li>Agent commission, often five to six percent of the whole price.</li>
        <li>Repairs and updates the agent insists on before listing.</li>
        <li>Closing costs and concessions you end up covering for the buyer.</li>
        <li>Months of mortgage, taxes, insurance, and utilities while it sits.</li>
        <li>Price cuts when the first wave of buyers passes it by.</li>
      </UL>
      <P>
        Stack those up and a chunk of that proud sticker price simply evaporates. On plenty of homes
        across {area} that is tens of thousands of dollars gone before you ever see a cent. The sign
        never mentions any of it.
      </P>

      <H2>How a Real Cash Offer Is Actually Calculated</H2>
      <P>
        A legitimate cash offer is not a number we pull out of thin air to see what we can get away
        with. It is built from three plain pieces:
      </P>
      <UL>
        <li><strong>What homes like yours have sold for recently.</strong> The fixed-up, market-ready value of comparable homes nearby.</li>
        <li><strong>The cost of the work yours needs.</strong> The honest price of the repairs and updates to bring it to that condition.</li>
        <li><strong>A fair margin to take the risk.</strong> Enough room to buy it as-is, carry it, and resell it without losing money.</li>
      </UL>
      <P>
        Start with the fixed-up value. Subtract the work the home needs. Leave a fair margin. What is
        left is the cash offer. A good buyer will walk you through every line of that out loud, so you
        can see precisely where the number came from.
      </P>

      <ArticleImage
        src="/images/adv-numbers-table.jpg"
        alt="A buyer walking a homeowner through the offer math at a table"
        caption="A real offer is shown, not just stated. You should see exactly where every dollar of it comes from."
      />

      <H2>Why the Cash Number Looks Lower, and Why It Often Is Not</H2>
      <P>
        Yes, the cash offer on paper usually sits below that listing sticker. Here is the part the
        sticker never tells you. The cash number already has the repairs taken out, because you are
        not paying for them. It has no commission, because there is no agent. It has no months of
        carrying costs, because you close in weeks. It has no fall-through risk, because the money is
        already in hand.
      </P>
      <P>
        So you are not comparing two prices. You are comparing a clean, certain net against a hopeful
        gross that still has to survive repairs, fees, time, and a buyer who might walk. When you put
        the two real numbers side by side, the gap shrinks far more than most people expect, and
        sometimes it disappears.
      </P>

      <H2>How to Spot an Offer That Truly Is a Lowball</H2>
      <P>
        A genuinely unfair offer has tells. Watch for these:
      </P>
      <UL>
        <li>The buyer will not explain how they reached the number.</li>
        <li>They pressure you to sign today and warn the offer vanishes tomorrow.</li>
        <li>The number drops after an inspection, with no clear reason.</li>
        <li>They cannot show you a track record or any local reviews.</li>
      </UL>
      <P>
        A fair buyer does the opposite of all of that. They show the math, give you room to think, and
        hold the number they put in writing. That is the difference between a low offer and a lowball
        one.
      </P>

      <H2>The Bottom Line on Your Number</H2>
      <P>
        You deserve a fair price for the home you have cared for all these years. Fair does not mean
        the biggest figure anyone is willing to say. It means an honest number you can actually count
        on, with the math shown plainly and no surprises waiting in the paperwork.
      </P>
      <P>
        The smartest move is simple. Ask for the number, ask exactly how it was built, and compare it
        to your real net from listing, not the dream on the sign. Do that, and you will never have to
        wonder whether you got lowballed again. You will know.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="Want to see the math behind your number?"
        subheading={`Text us the word ${config.smsKeyword} or call. We will show you exactly how the offer is built. No cost, no obligation.`}
      />
    </ArticleShell>
  )
}
