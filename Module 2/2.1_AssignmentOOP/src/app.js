// Progression 1: SmartPhone
class SmartPhone {
  constructor(ram, batteryPower, price) {
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price = price;
  }

  displayFeatures() {
    return this.ram + '\n' + this.batteryPower + '\n' + this.price;
  }

  remainingAmount(priceIHave) {
    // Calculates the remaining amount after paying the price
    this.price = this.price - priceIHave;
    return this.price;
  }
}

// Progression 2: AndroidPhone
class AndroidPhone extends SmartPhone {
  constructor(modelName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.modelName = modelName;
  }

  displayFeatures() {
    return (
      this.modelName +
      '\n' +
      this.ram +
      '\n' +
      this.batteryPower +
      '\n' +
      this.price
    );
  }

  remainingAmount(priceIHave) {
    const remaining = this.price - priceIHave;
    this.price = remaining;
  
    if (remaining < 0) {
      return 'Customer has no more amount';
    }
  
    return (
      'Customer has remaining Rs.' +
      remaining +
      ' after buying the android phone'
    );
  }
  
}


// Progression 3: IPhone
class IPhone extends SmartPhone {
  constructor(seriesName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.seriesName = seriesName;
  }

  displayFeatures() {
    return (
      this.seriesName +
      '\n' +
      this.ram +
      '\n' +
      this.batteryPower +
      '\n' +
      this.price
    );
  }

  remainingAmount(priceIHave) {
    // 1. Check if wallet is strictly less than price
    if (priceIHave < this.price) {
      return "Customer can't able to buy a phone due to insufficient amount";
    }

    // 2. IPhone Specific Logic: (Price - Wallet)
    // This results in 0 or negative number when paid in full, triggering "No more amount"
    const remaining = this.price - priceIHave; 
    
    this.price = remaining;

    if (remaining <= 0) {
      return 'Customer has no more amount';
    } else {
      return (
        'Customer has remaining Rs.' +
        remaining +
        ' after buying the iphone'
      );
    }
  }
}

// Progression 4: MobileCampus
class MobileCampus {
  constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
    this.NoOfMobiles = NoOfMobiles;
    this.NoOfAndroidMobiles = NoOfAndroidMobiles;
    this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
  }

}