import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition(`IntroductionPage => HomePage,
                TimelinePage => IntroductionPage,
                ProjectsPage => TimelinePage,
                ContactUsPage => ProjectsPage`, [
    /* order */
    /* 1 */ query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
    /* 2 */ group([  // block executes in parallel
            query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-0%)' }))
                ], { optional: true }),
            query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(+100%)' }))
                ], { optional: true })
            ])
    ]),
    transition(`HomePage => IntroductionPage,
                IntroductionPage => TimelinePage,
                TimelinePage => ProjectsPage,
                ProjectsPage => ContactUsPage,
                ContactUsPage => HomePage`, [
        /* order */
        /* 1 */ query(':enter, :leave',
                    style({ position: 'fixed', width: '100%' }),
                    { optional: true }),
        /* 2 */ group([  // block executes in parallel
                query(':enter', [
                        style({ transform: 'translateX(100%)' }),
                        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                    ], { optional: true }),
                query(':leave', [
                        style({
                            bottom: '0',
                            transform: 'translateX(0%)'
                        }),
                        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
                    ], { optional: true })
                ])
        ])
]
);
