import type { Handle } from '@sveltejs/kit';
import { i18n } from '$lib/i18n';
import { db } from '$lib/server/db/index';
import { character } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
const handleParaglide: Handle = i18n.handle();
export const handle: Handle = handleParaglide;

async function insertCharacter() {
    try {
        const existing = await db.select().from(character).where(eq(character.id, 1401)).get();
        
        if (!existing) {
            await db.insert(character).values({
                id: 1401,
                kr: "더 헤르타",
                rarity: 5,
                hp: 1164,
                atk: 679,
                def: 485,
                spd: 99,
                tnt: 75,
                maxEne: 220,
                type: "얼음",
                path: "지식",
                camp: "지니어스 클럽"
            });

            console.log("✅ 서버 시작 시 캐릭터 자동 삽입 완료!");
        } else {
            console.log("⚠️ 캐릭터가 이미 존재하므로 삽입하지 않음.");
        }
    } catch (error) {
        console.error("❌ 자동 데이터 삽입 실패:", error);
    }
}

// export const handle = async ({ event, resolve }) => {
//     await insertCharacter();  // 서버 시작 시 실행
//     return await resolve(event);
// };