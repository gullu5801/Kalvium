describe("SmartPhone", () => {
  let smartPhone;
  beforeEach(() => {
    smartPhone = new SmartPhone("4GB", "3800mAh", 24000);
  });

  it("1. Should receive 3 arguments (ram, batteryPower & price)", () => {
    expect(smartPhone.ram).toEqual("4GB");
    expect(smartPhone.batteryPower).toEqual("3800mAh");
    expect(smartPhone.price).toEqual(24000);
  });

  it("2. Should display features correctly", () => {
    expect(smartPhone.displayFeatures()).toEqual("4GB\n3800mAh\n24000");
  });

  it("3. Should calculate remaining amount", () => {
    smartPhone.remainingAmount(5000);
    expect(smartPhone.price).toEqual(19000);
  });
});

describe("AndroidPhone", () => {
  let androidPhone;
  beforeEach(() => {
    androidPhone = new AndroidPhone("OnePlus", "4GB", "3800mAh", 24000);
  });

  it("4. Should inherit from SmartPhone", () => {
    expect(androidPhone instanceof SmartPhone).toBe(true);
  });

  it("5. Should display features correctly", () => {
    expect(androidPhone.displayFeatures()).toEqual("OnePlus\n4GB\n3800mAh\n24000");
  });

  it("6. Should calculate remaining amount with a valid price", () => {
    expect(androidPhone.remainingAmount(20000)).toEqual(
      "Customer has remaining Rs.4000 after buying the android phone"
    );
  });
});

describe("IPhone", () => {
  let iPhone;
  beforeEach(() => {
    iPhone = new IPhone("13 Pro", "4GB", "4000mAh", 120000);
  });

  it("7. Should inherit from SmartPhone", () => {
    expect(iPhone instanceof SmartPhone).toBe(true);
  });

  it("8. Should display features correctly", () => {
    expect(iPhone.displayFeatures()).toEqual("13 Pro\n4GB\n4000mAh\n120000");
  });

  it("9. Should not allow purchase if price is insufficient", () => {
    expect(iPhone.remainingAmount(100000)).toEqual(
      "Customer can't able to buy a phone due to insufficient amount"
    );
  });

  it("10. Should calculate remaining amount correctly", () => {
    expect(iPhone.remainingAmount(130000)).toEqual("Customer has no more amount");
  });
});
