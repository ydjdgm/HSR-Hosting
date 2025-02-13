export interface CharacterData {
    entry_page_id: string;
    name: string;
    icon_url: string;
    display_field: {
        attr_level_1: CharacterAttributes;
        attr_level_80: CharacterAttributes;
    };
    filter_values: {
        character_rarity: CharacterFilter;
        character_combat_type: CharacterFilter;
        character_factions: CharacterFilter;
        character_paths: CharacterFilter;
    };
    desc: string;
}

interface CharacterAttributes {
    base_hp: string;
    base_atk: string;
    base_def: string;
    base_speed: string;
    dynamic: Record<string, unknown>; // 빈 객체를 받을 수 있음
}

interface CharacterFilter {
    values: string[];
    value_types: CharacterFilterType[];
    key: string | null;
}

interface CharacterFilterType {
    id: string;
    value: string;
    mi18n_key: string;
    icon: string;
    enum_string: string;
}