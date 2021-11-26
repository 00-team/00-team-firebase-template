import React, { FC } from 'react'

import { Helmet } from 'react-helmet'

interface HeadProps {
    title?: string
    description?: string
    url?: string
    keywords?: string
    image?: {
        url: string
        alt: string
        width: string
        height: string
        type?: string
    }
    twitter_card?: 'summary' | 'summary_large_image'
}

const defaultProps: HeadProps = {
    title: '*NAME* Demo',
    description: 'a Demo for *NAME*',
    url: 'https://evolution-demo-00-team.web.app/',
    keywords: '*NAME*,*NAME* Page',
    image: {
        url: 'https://cdn.discordapp.com/attachments/731174051170746500/814603567704047646/00_logo_f27.png',
        alt: '*NAME* Logo',
        width: '500',
        height: '500',
        type: 'image/jpeg',
    },
    twitter_card: 'summary',
}

const Head: FC<HeadProps> = ({
    title,
    description,
    url,
    image,
    keywords,
    twitter_card,
}) => {
    return (
        <>
            {title && (
                <Helmet>
                    <meta name='twitter:title' content={title} />
                    <meta property='og:title' content={title} />
                    <title>
                        {title}
                        {title.search('*NAME*') === -1 ? ' | *NAME*' : ''}
                    </title>
                </Helmet>
            )}

            {description && (
                <Helmet>
                    <meta name='twitter:description' content={description} />
                    <meta property='og:description ' content={description} />
                    <meta name='description' content={description} />
                </Helmet>
            )}

            {url && (
                <Helmet>
                    <meta property='og:url' content={url} />
                </Helmet>
            )}
            {twitter_card && (
                <Helmet>
                    <meta name='twitter:card' content={twitter_card} />
                </Helmet>
            )}

            {keywords && (
                <Helmet>
                    <meta name='keywords' content={keywords} />
                </Helmet>
            )}

            {image && (
                <Helmet>
                    <meta name='twitter:image' content={image.url} />

                    <meta property='og:image' content={image.url} />

                    <meta property='og:image:width' content={image.width} />
                    <meta property='og:image:height' content={image.height} />
                    <meta property='og:image:alt' content={image.alt} />
                </Helmet>
            )}

            {image && image.type && (
                <Helmet>
                    <meta property='og:image:type' content={image.type} />
                </Helmet>
            )}

            {/* basics */}
            <Helmet>
                <meta charSet='UTF-8' />
                {/* open graph protocol */}
                <meta property='og:site_name' content='*NAME*' />
                <meta property='og:type' content='website' />

                {/* twitter */}
                <meta name='twitter:creator' content='@00team_official' />
                <meta name='twitter:site' content='@00team_official' />

                <meta name='apple-mobile-web-app-title' content='*NAME*' />
                <meta name='copyright' content='00 Team' />
                <meta
                    name='google-site-verification'
                    content='K7RyLbYQ05aoqzSC3oaMMJuWtb0n6S-t4WKDZOtlAdU'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
                />
                <meta name='theme-color' content='#040404' />
            </Helmet>
        </>
    )
}

Head.defaultProps = defaultProps

export default Head
