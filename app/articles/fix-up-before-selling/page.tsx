import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export const metadata = {
  title: `Should You Fix Up Your House Before You Sell It? | ${config.companyName}`,
  description:
    "The instinct is to renovate first. Here is the math most homeowners get wrong about fixing up before a sale.",
}

export default function Page() {
  const area = config.marketName || "the areas we serve"
  return (
    <ArticleShell
      title="Should You Fix Up Your House Before You Sell It? The Math Most Homeowners Get Wrong"
      dek="The instinct is to renovate first. Here is why fixing up often costs more than it ever earns you back."
      companyName={config.companyName}
    >
      <P>
        It feels like common sense. Before you sell, you fix the place up so it shows well and fetches
        top dollar. Everyone knows that, right? It is the advice your neighbor gives, the advice the
        agent gives, the advice that just sounds correct.
      </P>
      <P>
        And for some homes, in some situations, it is correct. But for a lot of older homes, the fix-it-
        up-first plan quietly costs the owner more than it ever returns. The math is not what most
        people assume, and getting it wrong can drain your savings before you ever reach the closing
        table.
      </P>

      <ArticleImage
        src="/images/adv-homeowner-repair.jpg"
        alt="A homeowner facing a list of repairs before a sale"
        caption="The repair list always grows. The question is whether each dollar you spend comes back to you."
      />

      <H2>The Hidden Math: Spend a Dollar, Rarely Get a Dollar Back</H2>
      <P>
        Here is the piece almost nobody tells you. Most renovations do not return what they cost. You
        spend the money up front, in full, and you recover only part of it in a higher sale price. A
        kitchen redo, a bathroom remodel, new flooring, fresh paint, each one returns a fraction of
        what you sank into it.
      </P>
      <P>
        So the simple instinct, spend money to make money, often runs backward. You spend a dollar and
        get back seventy cents, or fifty, and the other portion simply disappears. Multiply that across
        a full pre-sale renovation and the leak gets serious fast.
      </P>

      <H2>The Costs That Never Make It Onto the Spreadsheet</H2>
      <P>
        Even if a project did break even, the repair budget is only part of the bill. Fixing up before
        you sell drags along a tail of costs people forget to count:
      </P>
      <UL>
        <li>Every extra month you keep paying the mortgage, taxes, insurance, and utilities.</li>
        <li>Contractors who run late and over budget, because they almost always do.</li>
        <li>The stress, the dust, and the disruption of living in a work zone.</li>
        <li>The very real risk a project uncovers a bigger problem hiding behind the wall.</li>
      </UL>
      <P>
        On an older home across {area}, that tail can swallow the modest bump a renovation might have
        added. You did all the work, took all the risk, and ended up roughly where you started, minus
        your weekends.
      </P>

      <H2>The Trap of the Never-Ending Repair List</H2>
      <P>
        Older homes have a cruel habit. You fix one thing and it exposes the next. You replace the
        flooring and now the trim looks tired. You paint a room and the dated fixtures jump out. You
        open one wall and find the wiring needs attention. The list does not shrink. It breeds.
      </P>
      <P>
        Many homeowners start a pre-sale fix-up with a tidy budget and a short list, then watch both
        balloon for months. The finish line keeps sliding away, and the savings keep draining out.

      </P>

      <ArticleImage
        src="/images/adv-renovation.jpg"
        alt="A home mid-renovation with work unfinished"
        caption="One project uncovers the next. The repair list on an older home tends to grow, not shrink."
      />

      <H2>The Path That Skips the Whole Equation</H2>
      <P>
        There is a way to sidestep the entire spend-then-pray dance. Sell the home as-is to a cash
        buyer. You make zero repairs. You spend nothing up front. You take on none of the risk that a
        project balloons.
      </P>
      <P>
        A cash buyer already expects the home to need work. The offer accounts for that work honestly,
        so the cost of repairs comes out of our side of the math, not your savings. You skip the
        contractors, the dust, the months of carrying costs, and the gamble entirely.
      </P>

      <H2>So, Should You Fix It Up First?</H2>
      <P>
        Ask yourself a few honest questions. Do you have the cash to fund repairs without straining
        your budget? Do you have the time and patience for months of contractors? And are you confident
        the work will return more than it costs? If you can answer a clear yes to all three, fixing up
        may pay off.
      </P>
      <P>
        But if any answer is no, the fix-it-up-first plan is likely to cost you more than it brings in.
        For a dated home and an owner who would rather not gamble their savings, selling as-is is often
        the smarter and far calmer route. Run the math before you swing a hammer.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="Skip the repairs. See your as-is number."
        subheading={`Text us the word ${config.smsKeyword} or call. We buy as-is, so you spend nothing on repairs. No cost, no obligation.`}
      />
    </ArticleShell>
  )
}
