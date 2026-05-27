import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export const metadata = {
  title: `Cash Offer or List With an Agent? An Honest Look | ${config.companyName}`,
  description:
    "A fair side-by-side of selling for cash versus listing with an agent, so you choose the route that fits your home and your life.",
}

export default function Page() {
  const area = config.marketName || "the areas we serve"
  return (
    <ArticleShell
      title="Cash Offer or List With an Agent? An Honest Look at What You Actually Walk Away With"
      dek="A fair side-by-side of both routes, so you choose the one that genuinely fits your home and your life."
      companyName={config.companyName}
    >
      <P>
        Here is a refreshing promise to start with. This article is not going to tell you that listing
        with an agent is a scam, because it is not. For the right home and the right owner, listing is
        a perfectly good way to sell, and sometimes it is the better one.
      </P>
      <P>
        What we are going to do instead is lay both paths side by side, honestly, so you can see which
        one fits your situation. Because the truth is they are built for two different kinds of seller,
        and the worst outcome is picking the wrong one for you.
      </P>

      <ArticleImage
        src="/images/adv-strangers-open-house.jpg"
        alt="Strangers walking through a home during an open house"
        caption="Listing means showings and open houses. For some sellers that is fine. For others it is the whole reason they look elsewhere."
      />

      <H2>When Listing With an Agent Is the Right Call</H2>
      <P>
        Let us give the listing route its full due. It can genuinely be the best choice when several
        things line up:
      </P>
      <UL>
        <li>Your home is in good shape, or you have the money and time to get it there.</li>
        <li>You can comfortably live through repairs, staging, showings, and open houses.</li>
        <li>You are not in a hurry, and a two to three month timeline does not stress you.</li>
        <li>You can ride out the chance that a deal falls through and you start again.</li>
      </UL>
      <P>
        When those boxes are checked, listing can pull the strongest top-line price. An agent markets
        the home, multiple buyers compete, and that competition can lift the final number. If that is
        your situation, list it, and do it with a good agent.
      </P>

      <H2>What Listing Quietly Costs, Even When It Goes Well</H2>
      <P>
        Now the honest other side. Even a smooth listing carries costs that the asking price hides:
      </P>
      <UL>
        <li>Commission, often five to six percent of the entire sale price.</li>
        <li>Repairs and updates spent up front before a single buyer walks in.</li>
        <li>Months of mortgage, taxes, insurance, and upkeep while it sits on the market.</li>
        <li>The strain of showings, and the deal that can still collapse at the last minute.</li>
      </UL>
      <P>
        None of that means listing is bad. It means the proud sticker price is not the money you keep.
        Across {area}, the gap between the sticker and the net can run into tens of thousands of
        dollars.
      </P>

      <H2>When a Cash Sale Is the Better Fit</H2>
      <P>
        A cash sale is built for a different homeowner with a different set of priorities. It tends to
        be the smarter route when:
      </P>
      <UL>
        <li>The home is dated or needs work you would rather not fund.</li>
        <li>You want certainty and a date you control, not a maybe.</li>
        <li>You would rather skip the showings and keep your privacy.</li>
        <li>The idea of months of upkeep and open houses simply wears you out.</li>
      </UL>

      <ArticleImage
        src="/images/adv-handshake.jpg"
        alt="A calm handshake on a cash sale"
        caption="A cash sale trades the highest possible sticker for speed, certainty, and a net with no surprises."
      />

      <H2>The Comparison That Actually Matters: Net, Not Sticker</H2>
      <P>
        The fairest way to choose is to compare what you truly walk away with on each path, not the
        headline number. With a listing, start with the likely sale price, then subtract commission,
        repairs, concessions, and the months of carrying costs. With a cash sale, the number you agree
        on is the number you net, with no repairs, no commission, and no fees pulled out.
      </P>
      <P>
        When you run both as real net figures, the cash route often lands much closer than the stickers
        suggest. And once you factor in the speed, the certainty, and the hassle you skip, plenty of
        homeowners decide the slightly lower net is a bargain.
      </P>

      <H2>So Which One Is Right for You?</H2>
      <P>
        Ask yourself two plain questions. Does my home need work I do not want to pay for? And do I
        value speed and certainty over chasing the highest possible price? If you answer yes to either,
        a cash sale is worth a serious look. If you answer no to both, listing may well be your move.
      </P>
      <P>
        There is no shame in either path. The only mistake is choosing one without seeing the real
        numbers behind both. Get your cash number, run your net on a listing, and put the two real
        figures side by side. Then decide with your eyes open.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="Want a real number to compare against?"
        subheading={`Text us the word ${config.smsKeyword} or call. Get your cash number, then weigh it against listing. No cost, no obligation.`}
      />
    </ArticleShell>
  )
}
