'use client';
import Navigation from '@/components/Navigation';
import ThemeWrapper from '@/infrastructure/theme';

export default function Home() {
  return (
    <ThemeWrapper>
      <div>
        <Navigation />
      </div>
    </ThemeWrapper>
  );
}
