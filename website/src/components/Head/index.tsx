
import {Meta,Title,Link} from '@solidjs/Meta'
const ogImage = 'https://sonner.emilkowal.ski/og.png';

const Head = () => (
  <>
    {/* Title */}
    <Title>Sonner</Title>
    <Meta name="og:title" content="Sonner" />

    {/* Description */}
    <Meta name="description" content="An opinionated toast component for React." />
    <Meta name="og:description" content="An opinionated toast component for React." />

    {/* Image */}
    <Meta name="twitter:image" content={ogImage} />
    <Meta name="og:image" content={ogImage} />

    {/* URL */}
    <Meta name="og:url" content="https://sonner.emilkowal.ski/" />

    {/* General */}
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Meta http-equiv="Content-Language" content="en" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@emilkowalski_" />
    <Meta name="author" content="Emil Kowalski" />

    {/* Favicons */}
    <Meta name="msapplication-TileColor" content="#ffffff" />
    <Meta name="theme-color" content="#ffffff" />
    <Link rel="shortcut icon" href="/public/favicon.ico" />
    <Link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
    </>
);

export default Head;
