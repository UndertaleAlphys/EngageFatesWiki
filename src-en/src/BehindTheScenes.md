# Behind the Scenes: Technical Overview

This mod goes beyond content and balance adjustments.

In order to support its design goals, a custom Skyline plugin is used to extend and adapt parts of *Fire Emblem Engage*’s runtime behavior.  
This page provides a technical overview of **what was implemented and why**, without assuming familiarity with the underlying code.

---

## 1. File Integrity and Stability

To reduce the risk of inconsistent behavior during development and testing:

- The plugin performs a **startup integrity check** on the mod files
- Files under `IF mod (Cobalt)` are verified against a known hash list
- Mismatches result in a clear startup error rather than undefined behavior

This mechanism exists to ensure a **stable and predictable baseline**, especially as the mod introduces complex runtime logic.

---

## 2. Class Change and Skill Acquisition

Several aspects of the class change system are handled explicitly in code:

- Promotion and reclass behavior is normalized
- Level transitions are controlled to avoid edge cases
- Dynamic level scaling is intentionally disabled

### Class Skill Handling
A consistent rule is enforced for class skills:

- After learning a class skill, switching out of the class makes it available as a freely equippable inherited skill
- **Switch back to the original class**:
  - That class’s original class skill is **removed** from the pool
  - The unit will **immediately relearn** that class’s original class skill
- Situations where a unit cannot level further are handled gracefully

This approach was chosen to make skill behavior more predictable and transparent to the player.

---

## 3. Combat Calculation Extensions

Instead of relying solely on data edits, parts of the combat calculation pipeline are extended at runtime:

- Hit, Avoid, Crit, and Dodge formulas are adjusted
- Follow-up (double attack) conditions are clarified
- Weapon advantage effects are applied consistently
- Terrain and support modifiers are unified

These changes aim to make combat outcomes easier to reason about, rather than strictly increasing or decreasing power.

---

## 4. Engage Count and SP Behavior

### Engage Count
- Certain original Engage gauge updates are suppressed
- Engage gain is recalculated based on:
  - Combat initiation
  - Enemy defeat
  - Combined actions within a single turn

### SP System
- SP gain is treated independently from Emblem equipment
- Units gain **SP equal to EXP**, regardless of Emblem status

These rules are enforced at runtime to ensure consistency across all contexts.

---

## 5. Artillery (Cannon) System Adjustments

The map artillery system is extended for clarity and usability:

- Ammunition consumption is disabled
- Remaining shots are displayed as unlimited
- Multi-target selection is supported
- Range display behavior is unified across different cannon types

Target selection logic is refined to better reflect actual combat impact.

---

## 6. Skill Behavior Corrections

Several skill-related behaviors are corrected or extended:

- **Canto++** grants remaining movement rather than a fixed value
- Style Bonus variant skills are resolved and removed cleanly when conditions change
- Terrain validity checks are unified across damage, healing, and positioning
- Weapon proficiency logic is adapted to support custom aptitude rules

These adjustments focus on correctness and consistency rather than raw power.

---

## 7. Item Logic Extensions

Item behavior is extended where necessary:

- Healing values can be overridden via embedded skill tags
- Certain Blessing-type items gain expanded usability conditions
- Item usage restrictions are selectively relaxed in controlled scenarios

All overrides are context-aware and validated at runtime.

---

## 8. Script and Event Extensions

To support custom scenarios and mechanics, additional script-level functions are provided:

- Direct access to Engage Count, turns, and bond levels
- Advanced unit targeting queries for debuff and support logic
- Custom map effects and conditional checks
- Scenario-specific utility functions

These extensions allow complex behaviors to be expressed without hardcoding map-specific logic.

---

## 9. Intentional System Constraints

Some systems are deliberately disabled or limited:

- The Well system
- Investment mechanics
- Skirmish generation

These decisions are part of the mod’s overall balance and pacing goals.

---

## Summary

This plugin serves as a **supporting framework** for the mod:

- It provides controlled extensions to existing systems
- It resolves edge cases that are difficult to address through data alone
- It enables more consistent and predictable mechanics

The goal is not to replace the original game systems, but to **adapt them carefully** to support the mod’s design direction.