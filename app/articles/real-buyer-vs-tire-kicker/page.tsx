import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export const metadata = {
  title: `How to Tell a Real Home Buyer From a Tire-Kicker | ${config.companyName}`,
  description:
    "A simple checklist to vet any cash buyer in about five minutes, so you protect yourself before you sign anything.",
}

export default function Page() {
  const area = config.marketName || "the areas we serve"
  return (
    <ArticleShell
      title="How to Tell a Real Local Home Buyer From a Tire-Kicker in About 5 Minutes"
      dek="A simple five-point checklist to vet any cash buyer and protect yourself before you ever sign a thing."
      companyName={config.companyName}
    >
      <P>
        Once you put the word out that you might sell, the calls start. Some of those callers are real
        local buyers who can close. Some are tire-kickers who will tie up your home, waste your weeks,
        and vanish the moment things get real.
      </P>
      <P>
        The trouble is they all sound about the same on the first call. Everyone says they buy houses.
        Everyone says they pay cash. Everyone says they close fast. So how do you tell the people who
        actually do it from the ones just talking?
      </P>
      <P>
        You ask five questions. A real buyer answers them in plain language without flinching. A
        tire-kicker gets vague, dodges, or pivots to pressure. Here is the checklist.
      </P>

      <ArticleImage
        src="/images/adv-local-team.jpg"
        alt="A local home buying team a homeowner can actually meet"
        caption="A real buyer is a real, findable local team, not a voice on a blocked number."
      />

      <H2>Question 1: How Do You Actually Pay, and Can You Prove It?</H2>
      <P>
        A real cash buyer buys with their own funds and can show proof, usually a bank letter or a
        statement, without making it a whole production. A tire-kicker gets squirmy here, because they
        do not have the money. They plan to find another buyer to take your contract off their hands,
        a move called wholesaling, and pocket the spread.
      </P>
      <P>
        Wholesaling is not automatically wrong, but you deserve to know which one you are dealing with.
        If they cannot prove they can pay, you cannot count on them to close.
      </P>

      <H2>Question 2: Can I See Your Reviews and Local Track Record?</H2>
      <P>
        A buyer who has actually closed deals across {area} has a trail behind them. Google reviews. A
        BBB profile. Homeowners who would vouch for them. Ask to see it. A real buyer hands it over
        gladly, because their record is their best sales pitch.
      </P>
      <P>
        A tire-kicker has thin air. A brand-new page, no reviews, no addresses they have actually
        bought, no one to point you to. If you cannot find a single trace of them having done this
        before, there may be a reason.
      </P>

      <H2>Question 3: How Did You Arrive at That Number?</H2>
      <P>
        This one separates the pros from the pretenders fast. A real buyer can break the offer down for
        you. Recent comparable sales, minus the work your home needs, with a fair margin to take the
        risk. They show the math out loud.
      </P>
      <P>
        A tire-kicker tosses out a big, vague number to get you excited and locked into a contract.
        Then, once you have signed, the number quietly shrinks. If a buyer will not explain where the
        figure came from, do not trust the figure.
      </P>

      <ArticleImage
        src="/images/adv-phone-vetting.jpg"
        alt="A homeowner vetting a buyer over the phone with a notepad"
        caption="Five minutes and five questions on the phone will tell you almost everything you need to know."
      />

      <H2>Question 4: Is the Number Locked, or Can It Change Later?</H2>
      <P>
        Ask point blank. Is this number final, or can it move after an inspection? A real buyer commits
        to what they put in writing. They have already accounted for the home needing work, so they are
        not looking for an excuse to chip the price down later.
      </P>
      <P>
        The classic tire-kicker play is to win you with a high number, get you under contract so you
        stop talking to anyone else, and then renegotiate down right before closing, when you feel too
        far in to walk. A locked, written number protects you from exactly that.
      </P>

      <H2>Question 5: What Happens If I Say No?</H2>
      <P>
        This might be the most revealing question of all. Ask what happens if you decide not to sell. A
        real buyer says, no problem, the offer stands and there is no obligation. They mean it, because
        they do not need to trap anyone.
      </P>
      <P>
        A tire-kicker turns up the heat. The offer expires tonight. You will regret it. The market is
        about to turn. Real pressure to decide right now is the single loudest warning sign there is. A
        legitimate offer can wait for you to be ready.
      </P>

      <H2>Run the Five-Minute Test on Anyone, Including Us</H2>
      <P>
        Here is the honest part. You should run this exact checklist on us too. Ask us how we pay. Ask
        for our reviews and our local track record. Ask how we built your number, whether it can change,
        and what happens if you walk away. We will answer every one of them straight, because we have
        nothing to hide.
      </P>
      <P>
        Vetting a buyer is not rude. It is wise. Five minutes and five questions will protect you from
        the headaches, and it will quickly show you who is real and who is just kicking your tires.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="Put us through the five-minute test."
        subheading={`Text us the word ${config.smsKeyword} or call and ask us anything. We answer straight. No cost, no obligation.`}
      />
    </ArticleShell>
  )
}
