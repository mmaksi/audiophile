'use client';
import NavigationBar from '@/components/NavigationBar';
import { Container, Hero } from '@/components/home/Hero';
import { ButtonPrimary } from '@/components/ui/buttons';
import { Body, H1, Overline } from '@/components/ui/headers';
import ThemeWrapper from '@/infrastructure/theme';

export default function Home() {
  return (
    <ThemeWrapper>
      <NavigationBar />
      <Hero>
        <Container>
          <Overline color="tertiary" opacity="50%">
            NEW PRODUCT
          </Overline>
          <H1 color="tertiary">XX99 Mark II Headphones</H1>
          <Body color="tertiary" opacity="50%">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Body>
          <ButtonPrimary>See Product</ButtonPrimary>
        </Container>
      </Hero>
    </ThemeWrapper>
  );
}
