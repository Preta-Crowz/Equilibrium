addLayer("+", {
    name: "Positive",
    symbol: "+",
    row: 0,
    side: 1,
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#CCCCCC",
    requires: new Decimal(2),
    resource: "Positive Energy",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.6,
    gainMult() {
        mult = new Decimal(1);
        return mult;
    },
    gainExp() {
        return new Decimal(1);
    },
    hotkeys: [
        {key: "+", description: "+: Reset for Positive Points", onPress() {
            if (canReset(this.layer)) {
                doReset(this.layer)
            }
        }}
    ],
    layerShown() { return true },
    onPrestige() { sideReset(0) },
    canReset() { return !hasUpgrade('-', 11) },
    upgrades: {
        11: {
            title: "Positive Activation",
            description: "Double \"Final\" Posibility Generation, Locks Negative",
            cost: new Decimal(10),
            effect() { return new Decimal(2) }
        }
    }
})

addLayer("-", {
    name: "Negative",
    symbol: "-",
    side: 0,
    row: 0,
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#777777",
    requires: new Decimal(2),
    resource: "Negative Energy",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.6,
    gainMult() {
        mult = new Decimal(1);
        return mult;
    },
    gainExp() {
        return new Decimal(1);
    },
    hotkeys: [
        {key: "-", description: "-: Reset for Negative Points", onPress() {
            if (canReset(this.layer)) doReset(this.layer)
        }}
    ],
    layerShown() { return true },
    onPrestige() { sideReset(1) },
    canReset() { return !hasUpgrade('+', 11) },
    upgrades: {
        11: {
            title: "Negative Activation",
            description: "Double \"Final\" Posibility Generation, Locks Positive",
            cost: new Decimal(10),
            effect() { return new Decimal(2) }
        }
    }
})