import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export const metadata = {
  title: `How To Tell A Real Cash Buyer From A Scam | ${config.companyName}`,
  description:
    "Five plain questions any legitimate buyer will answer without flinching, so you can protect yourself from a scam.",
}

export default function Page() {
  const area = config.marketName || "the areas we serve"
  return (
    <ArticleShell
      title="How To Tell A Real Cash Buyer From A Scam: 5 Questions That Expose The Difference"
      dek="Five plain questions any legitimate buyer answers without flinching, so you can protect yourself with confidence."
      companyName={config.companyName}
    >
      <P>
        The fear is real and it is reasonable. You hear stories. Someone signs over their home and the
        money never comes. Someone pays a mysterious upfront fee and the buyer disappears. When the
        biggest asset you own is on the line, a little fear is just good sense.
      </P>
      <P>
        The good news is that scams are not hard to spot once you know what to look for. A legitimate
        cash buyer behaves in predictable, transparent ways. A scammer cannot fake all of them. Here
        are five questions that draw the line clearly, and the answers a real buyer gives.
      </P>

      <ArticleImage
        src="/images/adv-phone-vetting.jpg"
        alt="A homeowner carefully vetting a buyer over the phone"
        caption="A few pointed questions, asked before you sign anything, are your strongest protection."
      />

      <H2>Question 1: Are You Asking Me for Any Money Up Front?</H2>
      <P>
        This is the brightest line of all. A real cash buyer never asks you to pay anything to receive
        an offer. No application fee, no processing fee, no deposit, nothing. The money flows toward
        you, not away from you.
      </P>
      <P>
        If anyone asks you to send money, pay a fee, or buy something before they will buy your home,
        stop right there. That is a scam, full stop. A legitimate buyer makes its money by buying and
        reselling homes, never by collecting fees from sellers.
      </P>

      <H2>Question 2: Can I Verify You Are a Real, Local Business?</H2>
      <P>
        A real buyer has a real footprint. A registered business name. A physical presence. A BBB
        profile. Reviews from homeowners across {area}. You can look them up and find them. Ask for it,
        then actually check.
      </P>
      <P>
        A scammer is built from smoke. No verifiable address, no reviews, no record of homes they have
        actually bought, a phone number that goes nowhere. If you cannot confirm the company exists and
        has done this before, do not go any further.
      </P>

      <H2>Question 3: Will a Title Company or Attorney Handle Closing?</H2>
      <P>
        Every legitimate home sale closes through a neutral third party, a licensed title company or a
        real estate attorney. They verify everything and make sure the money lands properly before any
        deed changes hands. A real buyer insists on this, because it protects everyone.
      </P>
      <P>
        A scammer wants to skip it. They push you to sign documents directly, to wire money to a
        personal account, or to close in some unofficial way. If a buyer resists using a proper title
        company or attorney, that is a glaring red flag.
      </P>

      <ArticleImage
        src="/images/adv-paperwork-alone.jpg"
        alt="A homeowner reviewing closing paperwork carefully"
        caption="A real sale always closes through a neutral title company or attorney. Never sign around that."
      />

      <H2>Question 4: Will You Put the Offer in Writing With Clear Terms?</H2>
      <P>
        A real buyer gives you a written offer with plain, readable terms. The price, the closing
        timeline, the conditions, all spelled out. You can take it home, read it twice, and have
        someone you trust look it over. No rush.
      </P>
      <P>
        A scammer keeps things verbal and vague, leans on urgency, and gets cagey when you ask for the
        details in writing. If a buyer will not commit clear terms to paper, there is a reason, and it
        is not in your favor.
      </P>

      <H2>Question 5: Are You Pressuring Me to Decide Right Now?</H2>
      <P>
        High pressure is the scammer's favorite tool, because it stops you from thinking, checking, and
        asking the people you trust. The offer expires tonight. You have to sign now. Do not talk to
        anyone. Those lines are designed to rush you past your own good judgment.
      </P>
      <P>
        A real buyer does the opposite. The offer stands. Take your time. Talk it over with your
        family. We are not going anywhere. Genuine patience is one of the surest signs you are dealing
        with someone legitimate.
      </P>

      <H2>Trust, but Verify, Every Single Time</H2>
      <P>
        Run these five questions on any buyer who approaches you, and yes, run them on us too. Ask if we
        want money up front. Check that we are a real local company with reviews. Confirm we close
        through a title company. Ask for the offer in writing. See whether we give you room to breathe.
      </P>
      <P>
        We will pass every one of them, because that is simply how a real company operates. Your caution
        is not an insult to anyone honest. It is exactly the shield that keeps the dishonest ones away
        from your front door.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="Ask us all five. We will pass every one."
        subheading={`Text us the word ${config.smsKeyword} or call. Verify us before you trust us. No cost, no obligation, no pressure.`}
      />
    </ArticleShell>
  )
}
