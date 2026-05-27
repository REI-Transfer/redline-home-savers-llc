import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export const metadata = {
  title: `Why Not Just Sell It Yourself And Skip The Middleman? | ${config.companyName}`,
  description:
    "Selling on your own sounds like keeping every dollar. Here is what it actually takes, and where it goes sideways.",
}

export default function Page() {
  const area = config.marketName || "the areas we serve"
  return (
    <ArticleShell
      title="Why Not Just Sell It Yourself And Skip The Middleman? The Hidden Cost Of Going It Alone"
      dek="Selling on your own sounds like keeping every dollar. Here is what it actually takes, and where it tends to go sideways."
      companyName={config.companyName}
    >
      <P>
        It is a fair question, and an appealing one. If you sell the home yourself, with no agent and no
        buyer in the middle, you keep all the money, right? No commission, no markup, just you and the
        buyer and a clean deal.
      </P>
      <P>
        On paper it sounds like the smart, frugal play. And for the rare seller with the time, the
        nerve, and the know-how, it can work. But for most homeowners, going it alone turns out to be far
        more work, and far more risk, than the daydream suggests. Here is the honest picture before you
        plant a sign in the yard.
      </P>

      <ArticleImage
        src="/images/adv-paperwork-alone.jpg"
        alt="A homeowner sitting alone with a stack of sale paperwork"
        caption="Selling solo means every task, and every risk, lands on your shoulders alone."
      />

      <H2>You Become the Agent, the Marketer, and the Negotiator</H2>
      <P>
        When you sell it yourself, every job an agent normally handles becomes yours. All of it:
      </P>
      <UL>
        <li>Pricing the home right, which is harder than checking one neighbor's sale.</li>
        <li>Photographing, listing, and marketing it so buyers actually see it.</li>
        <li>Fielding calls, scheduling showings, and walking strangers through your home.</li>
        <li>Negotiating with buyers and their agents, who do this for a living.</li>
        <li>Wrangling the contracts, disclosures, and legal paperwork without a slip.</li>
      </UL>
      <P>
        That is a real part-time job, stretched across weeks or months. For many homeowners past 45,
        especially with a home that needs work, that workload is exactly what they are hoping to avoid.

      </P>

      <H2>Pricing It Yourself Is a High-Stakes Guess</H2>
      <P>
        Get the price wrong on your own and it costs you either way. Price it too high and the home sits,
        goes stale, and you end up cutting it later for less than you would have gotten with a sharp
        price from the start. Price it too low and you simply hand money away.
      </P>
      <P>
        Without access to full sales data and real experience, pricing becomes a guess. And it is a guess
        on the largest number in your financial life, with no safety net under it.
      </P>

      <H2>Strangers, Safety, and the Loss of Privacy</H2>
      <P>
        Selling solo means opening your door to strangers who answer your ad. You are letting unknown
        people into your home, often when it is just you there. There is a privacy cost and, frankly, a
        safety one that a lot of homeowners do not weigh until they are living it.
      </P>
      <P>
        For many sellers across {area}, the steady parade of strangers and the loss of privacy is reason
        enough to look for a simpler path.
      </P>

      <ArticleImage
        src="/images/adv-strangers-open-house.jpg"
        alt="Strangers touring a home a homeowner is selling on their own"
        caption="On your own, vetting every stranger who wants to see the home falls entirely to you."
      />

      <H2>The Legal Paperwork Is Where It Quietly Goes Wrong</H2>
      <P>
        Real estate contracts and disclosures are not casual documents. A missed disclosure, a sloppy
        contract, or a misunderstood clause can come back to haunt you long after closing, sometimes with
        legal consequences. Agents and attorneys exist in part because this is genuinely easy to get
        wrong.
      </P>
      <P>
        Going it alone means carrying that legal risk entirely yourself, on paperwork most people only
        handle a couple of times in their whole life.
      </P>

      <H2>The Simpler Path That Keeps the Money Clean</H2>
      <P>
        Here is the route that captures the appeal of selling solo, keeping the money clean with no agent
        commission, while skipping the workload and the risk. You sell directly to a cash buyer.
      </P>
      <P>
        There is no agent and no commission, so you keep that. But you also skip the pricing guesswork,
        the marketing, the showings, the strangers, and the legal exposure. We bring the offer to you, we
        close through a proper title company, and you handle none of the heavy lifting. It is the
        do-it-yourself dream without the do-it-yourself burden.
      </P>

      <H2>So Should You Sell It Yourself?</H2>
      <P>
        If you have genuine experience, plenty of time, and you are comfortable handling pricing,
        marketing, strangers, and contracts on your own, selling solo can save you a commission. For a
        small number of people, that adds up.
      </P>
      <P>
        But for most homeowners, and especially for a dated home and an owner who would rather not run a
        months-long project, the hidden costs of going it alone outweigh the saved commission. Selling
        directly for cash keeps the money clean and hands the work and the risk to someone else.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="Skip the work, keep the deal clean."
        subheading={`Text us the word ${config.smsKeyword} or call. No agent, no commission, no months of effort. No cost, no obligation.`}
      />
    </ArticleShell>
  )
}
