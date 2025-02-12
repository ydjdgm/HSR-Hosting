import { db } from '../src/lib/server/db/index';
import { character } from '../src/lib/server/db/schema';

async function insertCharacter() {
    try {
        await db.insert(character).values({
            id: 1402,
            kr: "아글라이아",
            rarity: 5,
            hp: 1242,
            atk: 699,
            def: 485,
            spd: 102,
            tnt: 100,
            maxEne: 350,
            type: "번개",
            path: "기억",
            camp: null
        });

        console.log("캐릭터 삽입 완료!");
    } catch (error) {
        console.error("데이터 삽입 실패:", error);
    } finally {
        process.exit(); // 실행 후 종료
    }
}

// 스크립트 실행
insertCharacter();
