
function FooterLink({href, title}) {
  return (
    <span>
      <a
        href={href}
        target={!href.startsWith('/') ? '_blank' : undefined}
        className="transition duration-75 ease-in-out cursor-pointer text-white text-base font-normal hover:text-zinc-400 hover:no-underline"
      >
        {title}
      </a>
    </span>
  );
}

function Column({ title, links}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-zinc-400 text-base font-normal">{title}</p>
      {links.map((link) => (
        <FooterLink key={link.href} href={link.href} title={link.title} />
      ))}
    </div>
  );
}

export default function Footer() {
  // const { party } = usePartyContext();

  // function onLogoClick() {
  //   party();
  // }

  return (
    <footer className="py-16 mt-12 bg-zinc-900 px-12">
      <div className="flex flex-col-reverse md:flex-row md:justify-between">
        <div className="flex flex-col md:items-start md:mt-0 md:px-4 md:py-4 gap-y-7">
          <img
            // onClick={onLogoClick}
            src="/icon.svg"
            width="48"
            height="48"
            alt="Stargaze"
            className="opacity-70 hover:opacity-100 hover:animate-spin"
          />
          <div className="flex">
            <FooterLink
              href="https://www.stargaze.zone/legal"
              title="Terms of Service"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between h-full mt-8 text-center md:text-left md:mt-0">
          <div className="grid grid-cols-1 gap-12 text-sm md:grid-cols-4">
            <Column
              title="Create"
              links={[
                {
                  title: 'Smart Contracts',
                  href: 'https://docs.stargaze.zone/developers/cosmwasm-smart-contracts',
                },
                {
                  title: 'Stargaze Studio',
                  href: 'https://studio.stargaze.zone/',
                },
                {
                  title: 'Documentation',
                  href: 'https://docs.stargaze.zone/',
                },
              ]}
            />
            <Column
              title="Learn"
              links={[
                {
                  title: 'Analytics',
                  href: 'https://info.stargaze.zone/analytics/collections',
                },
                {
                  title: 'Tokenomics',
                  href: 'https://mirror.xyz/stargazezone.eth/h9Bc7jODUrYB1Jw4mve3QEGVkBwBsyVebN6NP7tRl_Y',
                },
                {
                  title: 'Blog',
                  href: 'https://mirror.xyz/stargazezone.eth',
                },
              ]}
            />
            <Column
              title="Connect"
              links={[
                {
                  title: 'Get Featured',
                  href: 'https://stargaze-zone.typeform.com/launchpad',
                },
                {
                  title: 'Partnerships',
                  href: 'https://stargaze-zone.typeform.com/partnerships',
                },
              ]}
            />
            <Column
              title="Community"
              links={[
                {
                  title: 'Discord',
                  href: 'https://discord.gg/stargaze',
                },
                {
                  title: 'Twitter',
                  href: 'https://twitter.com/stargazezone',
                },
                {
                  title: 'Telegram',
                  href: 'https://t.me/joinchat/ZQ95YmIn3AI0ODFh',
                },
                {
                  title: 'GitHub',
                  href: 'https://github.com/public-awesome',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
