from .strings import *


def madlib():
    adj1 = input(ADJ)
    adj2 = input(ADJ)
    adj3 = input(ADJ)
    adj4 = input(ADJ)
    noun1 = input(NOUN)
    noun2 = input(NOUN)
    noun3 = input(NOUN)
    noun4 = input(NOUN)
    noun5 = input(NOUN)
    noun6 = input(NOUN)
    noun_plural = input(PLURAL)
    body_part = input(BODY_PART)
    body_part2 = input(BODY_PART)
    verb = input(VERB)
    verb_past = input(PAST_TENSE)
    verb_past2 = input(PAST_TENSE)
    spell1 = input(SPELL)
    spell2 = input(SPELL)

    madlib = f"A {adj1} glow burst suddenly across the enchanted sky above them as an edge of \
dazzling sun appeared over the sill of the nearest {noun1}. The light hit both of their {body_part} \
at the same time, so that Voldemort’s was suddenly a flaming {noun2}. Harry heard the high voice \
shriek as he too {verb_past} his best hope to the heavens, pointing Draco’s {noun3}:\n\
\"{spell1}!\"\n\
\"{spell2}!\"\n\
The bang was like a cannon blast, and the {adj2} flames that erupted between them, \
at the dead center of the circle they had been treading, marked the point where the \
{noun_plural} collided. Harry saw Voldemort’s {adj3} jet meet his own spell, saw the Elder Wand \
fly high, dark against the sunrise, spinning across the enchanted ceiling like the \
head of Nagini, spinning through the air toward the master it would not {verb}, who had \
come to take full possession of it at last. And Harry, with the unerring skill of a Seeker, \
caught the {noun4} in his free hand as Voldemort fell backward, arms splayed, the slit pupils \
of the {adj4} {body_part2} rolling upward. Tom Riddle hit the floor with a mundane finality, his body \
feeble and shrunken, the white hands empty, the snakelike face vacant and unknowing. Voldemort \
was dead, {verb_past2} by his own rebounding {noun5}, and Harry stood with two wands in his hands, \
staring down at his enemy’s {noun6}."

    print(madlib)
