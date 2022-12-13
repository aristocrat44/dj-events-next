import { Box } from '@mui/system';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <Box>
        <p>This is a app to find DJ Events</p>
      </Box>
      <Link href="/">Home</Link>
    </div>
  );
}
