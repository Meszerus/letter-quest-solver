const MODIFIER_NONE = 0;
const MODIFIER_STANDARD = 1;
const MODIFIER_ACHIEVEMENT_COMMON = 3;
const MODIFIER_ACHIEVEMENT_UNCOMMON = 5;
const MODIFIER_ACHIEVEMENT_RARE = 40;
const MODIFIER_ACHIEVEMENT_RARE_SPECIFIC = 50;

const getAchievementWeight = (achievementWanted, conditionMet, rarityModifier) => {
    return (achievementWanted && conditionMet) ? rarityModifier : MODIFIER_NONE;
};