## Class Change System Overview  

### Class Level Caps
- **Base Classes**: Max Level **20**
- **Advanced & Special Classes**: Max Level **40**

---

### Class Skills
- **Base Classes**:  
  If a class has a class skill, the unit learns it upon leveling up.
- **Advanced & Special Classes**:  
  The class skill is learned once the unit reaches **level 21**.

#### Class Skill and Inheritable Skill Pool Behavior
- After a unit **learns a class-specific skill**, switching **out of that class** will cause the class skill to be added to the **freely equippable inheritable skill pool**.
- The skill can then be equipped like any other inheritable skill.

However:
- **If the unit switches back to the original class**:
  - All freely equipped inheritable skills are **removed**
  - The unit will **immediately relearn** that class’s original class skill

This behavior is part of the game’s intended mechanics and is **not a bug**.

---

### Master Seal
- A **Master Seal** can be used when a **Base class** unit reaches **level 10**.
- Promotes the unit to a relevant **Advanced class**.
- Upon promotion, the unit's level becomes **20**, even if it was lower before.
- **No stat increases** are applied from level-ups during this promotion.

---

### Second Seal
- Reclassing keeps the **unit's level unchanged**.

#### Base Class Units:
- Can reclass into another **Base** or **Special** class.

#### Advanced Class Units:
- Can reclass into another **Advanced** or **Special** class.

#### Special Class Units:
- If **level < 20**: Can reclass into a **Base** or **Special** class.
- If **level ≥ 20**: Can reclass into an **Advanced** or **Special** class.

---

### Other Info
- Units **cannot reclass into the same class** they are currently in.
- If a unit has already reached the **max level** of the new class after reclassing, they will **immediately learn** that class’s skill.
  - *(Prevents skill loss due to being unable to level further.)*