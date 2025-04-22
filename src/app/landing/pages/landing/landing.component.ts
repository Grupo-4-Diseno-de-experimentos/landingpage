import { Component } from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {HeroComponent} from '../../components/hero/hero.component';
import {BenefitsComponent} from '../../components/benefits/benefits.component';
import {FeaturesComponent} from '../../components/features/features.component';
import {PricingComponent} from '../../components/pricing/pricing.component';
import {FaqComponent} from '../../components/faq/faq.component';
import {StepsComponent} from '../../components/steps/steps.component';

@Component({
  selector: 'app-landing',
  imports: [FooterComponent, NavbarComponent, HeroComponent, BenefitsComponent, FeaturesComponent, PricingComponent, FaqComponent, StepsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
