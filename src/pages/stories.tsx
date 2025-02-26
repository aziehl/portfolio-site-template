import Head from 'next/head';
import { Image, Paper, Container, Space, Title, Text } from '@mantine/core';
import { containerProps, paperProps } from '@/lib/constants';
export default function Stories() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <link rel="canonical" href={"/portfolio"} />
            </Head>
            <Container {...containerProps}>
                <Title ta="left" order={2} fw={700}>Solstic Ski</Title>
                <Space h="xs" />
                <Container>
                    <Image src="https://res.cloudinary.com/drup79ajd/image/upload/v1740371400/c47b14d8-a9c1-41bb-8170-22a3037df103_cointp.jpg" height={450} fit="cover" alt="Golden sunset" />
                </Container>
                <Paper {...paperProps}>
                    <Text size="md" m={2}>
                        The sleepy sun crested the ridge behind us. It revealed a landscape enveloped in white, which glistened as light danced across our feet. I reached up, my ski pole looped around my gloved hand, and switched off my headlamp. We began our ascent predawn to guarantee we’d have enough time to skin up and ski on the darkest day of the year. I pondered why I’d let Heidi drag me out of my warm bed, into the damn cold. I chalked it up to early season powder fever. We were maybe a third of the way up the snowfield we’d planned to ski and already I lusted for a steaming cup of coffee. I would definitely snag one from whichever drive through coffee hut we passed first on our return home. It wasn’t really that cold, but coffee would be a welcome high note to end our trek.
                    </Text>
                    <Text size="md" m={2}>
                        I looked up the skin track at Heidi, who’d stopped to assess the conditions ahead. Before today, I hadn’t seen Heidi since her family’s big preseason get together. Life just got in the way. It’s funny, we could go months without seeing each other, but add a few inches of snow into the equation and suddenly we were making late night phone calls to coordinate which park and ride we’d meet at before tucking in for several scant hours of sleep.
                    </Text>
                    <Text size="md" m={2}>
                        Heidi’s family had a tradition, every year without fail. Around the first frost they’d all camp out, and throw a big bonfire in the name of Ullr up at their cabin near the foot of the mountains.
                    </Text>
                    <Text size="md" m={2}>
                        “You know we could’ve gone to a real party,” I’d remembered saying. “There’s Ullrfest events at every resort I can think of.”
                    </Text>
                    <Text size="md" m={2}>
                        “And end up at a beer induced bro bash?” Heidi replied. “I don’t think so. Besides, this is the real deal! And it’s tradition. My parents and their friends were doing this way before Ullrfest signs were plastered all over ski towns.”
                    </Text>
                    <Text size="md" m={2}>
                        The flames were roaring by the time we’d arrived. An assemblage of tents were pitched off to one side up against a stand of pines. Across the small clearing Heidi’s family cabin nestled against the woods. Surrounding the central fire pit, multiple barbeques wafted savory smoke our way. I spotted a pile of broken skis, some new and fat, others straight and skinny relics. What were they for? I’d never actually attended an Ullrfest, and had no idea what the celebration entailed.
                    </Text>
                    <Text size="md" m={2}>
                        We grabbed some food and made unmemorable small talk, which honestly exhausted me, surrounded by strangers. But Heidi seemed to know everyone. Families gathered around the fire, started plucking skis from the pile, and after a moment’s pause, casually tossed them among the coals, then stepped away. As the pile dwindled Heidi grabbed a matching pair of delaminated, discolored boards and handed me one. I couldn’t even tell the brand. The topsheet was a tattered, waxy, epoxy mottled with red and yellow.
                    </Text>
                    <Text size="md" m={2}>
                        “What’s this?”
                    </Text>
                    <Text size="md" m={2}>
                        “Your offering. You give, then ask for a gift this season in return.”
                    </Text>
                    <Text size="md" m={2}>
                        “Like what? An awesome powder day?”
                    </Text>
                    <Text size="md" m={2}>
                        “Whatever you want. Then toss it in the fire.”
                    </Text>
                    <Text size="md" m={2}>
                        I thought about it. I didn’t know what to ask for. In fact it sounded more like I should pray. I just wanted a good winter. I decided that was enough, and hefted the old ski into the flames.
                    </Text>
                    <Text size="md" m={2}>
                        At the end of the night Heidi’s dad stepped up onto a cooler.
                    </Text>
                    <Text size="md" m={2}>
                        “Friends, thanks for coming. Over the years it’s become our tradition to celebrate Ullr and ask that the gods watch over us during the tumultuous winter. I’d like to think it’s why I’m standing here despite some of the riskier decisions I’ve made.” He grinned, and a few folks laughed, but I could tell he believed it.
                    </Text>
                    <Text size="md" m={2}>
                        “Regardless it’s a great way to bring our families together, mark the turning of the season, and usher in winter. May we all have bottomless powder days, and safe returns to our loved ones. May none of us face the white dragon. Praise be to Ullr!” He thrust his drink in the air, then stepped down.
                    </Text>
                    <Text size="md" m={2}>
                        The rest of the night blurred together.
                    </Text>
                </Paper>
                <Space h="xs" />
                <Container>

                    <Image src="https://res.cloudinary.com/drup79ajd/image/upload/v1740371398/miroslav-matthess-HlHQ_I_fLcg-unsplash_wzd4qq.jpg" height={300} fit="cover" alt="Dramatic mtns" />
                </Container>

                <Paper {...paperProps}>
                    <Text size="md" m={2}>
                        I found myself sweating despite the cold. Skinning was a workout, essentially doing lunges up a mountain. I let myself be distracted and gazed upward. Sunlight warmed the clouds that flitted over us. Fortunately, the storm which delivered the fresh coat of snow was clearing out. Prime early season conditions.
                    </Text>
                    <Text size="md" m={2}>
                        “You’d better hurry up if you want the first turns of the season!” Heidi called back.
                    </Text>
                    <Text size="md" m={2}>
                        She’d set the skin track and still pulled ahead while I was preoccupied. I took a few quick steps until I’d closed the distance between us.
                    </Text>
                    <Text size="md" m={2}>
                        “I was just thinking of your family’s Ullr party.” I said between breaths.
                    </Text>
                    <Text size="md" m={2}>
                        “Oh yeah? Good times.”
                    </Text>
                    <Text size="md" m={2}>
                        “What’d you ask of Ullr?”
                    </Text>
                    <Text size="md" m={2}>
                        “I’d tell you but,” she paused and grinned. “I wouldn’t want to offend the gods!”
                    </Text>
                    <Text size="md" m={2}>
                        “I’m serious!”
                    </Text>
                    <Text size="md" m={2}>
                        “It’s between me and Ullr. But everyone pretty much keeps it simple.”
                    </Text>
                    <Text size="md" m={2}>
                        “Ugh you’re ridiculous, it’s not a big deal, just tell me.”
                    </Text>
                    <Text size="md" m={2}>
                        “You think Ullr is ridiculous.” Her smile dropped.
                    </Text>
                    <Text size="md" m={2}>
                        “No, well, I mean, I thought it was just for fun. I guess.” Nice one, I thought.
                    </Text>
                    <Text size="md" m={2}>
                        “It’s all fun and games until you’ve been in an avalanche. Then you’ll take all the help you can get,” She quipped, and strode off ahead.
                    </Text>
                    <Text size="md" m={2}>
                        I didn’t catch up until we crested the ridge, both out of breath. Spears of exposed rock jutted around us. It marked our turn-around point, though the ridge was only the shoulder of another peak. Further above lay glaciers, teeming with thinly covered crevasses. Dangerous terrain this time of year. I surveyed our line. The best part about snowfields was they offered consistent, open, early season skiing. The worst part was they were consistently open, devoid of trees and pitched just right to be prime avalanche terrain. Still, it’d been relatively calm, and there hadn’t been too much snow overnight. Topping out, we looked at each other, then turned outward at the blue spires surrounding us. We were high enough now to see layer upon layer of ridges and peaks that rose and dipped behind each other.
                    </Text>
                    <Text size="md" m={2}>
                        “Wow.”
                    </Text>
                    <Text size="md" m={2}>
                        Heidi, always efficient, bent down, clipped in, and tore the skins off her skis. I followed and we quickly got ready to ski, and threw on layers. It’d gotten well into the afternoon by now. We checked beacons again. I took a sip from my nalgene and tossed it in the top of my pack. I felt the tension build as our descent neared.
                    </Text>
                    <Text size="md" m={2}>
                        “So… who wants first tracks?” Heidi asked.
                    </Text>
                    <Text size="md" m={2}>
                        “Obviously not you, otherwise you’d already be a hundred yards down the slope.”
                    </Text>
                    <Text size="md" m={2}>
                        “You don’t get out as often. You should take ‘em.”
                    </Text>
                    <Text size="md" m={2}>
                        “You sure?” I inclined my head.
                    </Text>
                    <Text size="md" m={2}>
                        “Yeah, besides there’s more than enough snow to go around.”
                    </Text>
                    <Text size="md" m={2}>
                        “Alright then…” I clicked my poles, did a little hop and pointed my tips downhill.
                    </Text>
                    <Text size="md" m={2}>
                        One, two, three buttery turns, and then--I was falling before I knew what happened. It felt like the rug had been pulled out from under me. I got tossed onto my side. Whiteness engulfed me, and mist stung my eyes. For a few brief moments, I tumbled over in space, with no concept of up or down.
                    </Text>
                    <Text size="md" m={2}>
                        That’s when the snout of the beast emerged from the mist. A jagged icicle chin seemed to coalesce from the mist itself. Consuming it. Next a neck and wings formed, scales and clawed feet.
                    </Text>
                    <Text size="md" m={2}>
                        Large snowball eyes glistened and bore into me. Still I tumbled, yet it was impossible to break the dragon’s gaze.
                    </Text>
                    <Text size="md" m={2}>
                        “You sought to conquer me,” It said. “But you cannot.”
                    </Text>
                    <Text size="md" m={2}>
                        “What?” I blurted, disoriented. Terrified.
                    </Text>
                    <Text size="md" m={2}>
                        “You tried to avoid me,” snorted the beast. Frost blew out it&apos;s teardrop nostrils. “But I am indomitable. When you venture into my realm, you brush with fate. I bide my time. My power waxes with the solstice. I catch fools such as you when you least expect it.” The dragon flexed it’s claws and reached for me.
                    </Text>
                    <Text size="md" m={2}>
                        “You will be mine!”
                    </Text>
                    <Text size="md" m={2}>
                        “No!” I tried to scream, but my mouth filled with snow and I coughed, then choked instead.
                    </Text>
                    <Text size="md" m={2}>
                        The avalanche slowed. I struggled to back away, flailing my arms, but I was already caught. Imprisoned in snow, encased in an icy tomb. My breath caught in my throat, and I realized I was freezing. The dragon laughed thunderously, it’s claws clenched around me. I suffocated against scaly flesh, icy cold. I squeezed my eyes shut, and everything went black. I felt the beating of wings above me, roaring as snow piled above. Then silence.
                    </Text>
                    <Text size="md" m={2}>
                        The light on my eyelids darkened. Shrunk to a pinpoint. I heard a faint noise. I pried my eyes open, which hurt like hell, to the sight of a gloved hand brushing snow away from my face.
                    </Text>
                    <Text size="md" m={2}>
                        “You’re alive!” Gasped Heidi. “You’re alive.”
                    </Text>
                </Paper>
                <Space h="xs" />
                <Container>

                    <Image src="https://res.cloudinary.com/drup79ajd/image/upload/v1740371374/8f4af5d0-40aa-4a4f-99eb-dc73d3875452_tjtvf2.jpg" width={250} fit="contain" alt="Snowy Woods" />
                </Container>
            </Container >
        </>
    );
}