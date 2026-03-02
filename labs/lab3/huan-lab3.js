   //Author: Huan Liu
    //ITMD 541-04 Graduate Student

    //Exercise 1

    function minMaxAverage(numberarray) {
        var countNumber = numberarray.length;      //get number of the array
        // get total number and max and min
        var total = 0;
        max = numberarray[0];
        min = numberarray[0];
        for (var i = 0; i < countNumber; i++) {
            total += numberarray[i];
            if (max > numberarray[i]) {
                min = numberarray[i];
            } else {
                max = numberarray[i];
            }
        }
        var average = total / countNumber;
        console.log("Total Number: " + countNumber + ", Min Value:" + min + ", Max Value:" + max + ", Average:" + average);


    };
    minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
    minMaxAverage([3, 6, 9, 11, 13, 15, 17, 19]);
    minMaxAverage([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

    //Exercise 2
    function countVowels(word) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        word = word.toLowerCase();
        var vowelNumber = 0;
        for (var i = 0; i < word.length; i++) {
            if (vowels.includes(word[i])) {
                vowelNumber++;
            }
        }
        if (vowelNumber == 1) {
            console.log(vowelNumber + " Vowel");
        } else {
            console.log(vowelNumber + " Vowels");
        }
    }
    countVowels("world");
    countVowels("Winter");
    countVowels("Testpassager");



    // Exercise 3

    function sortNumbers(numberArr) {
        let oriArray = numberArr;
        let newArr = oriArray.slice();

        var temp = 0;
        for (var i = 0; i < newArr.length; i++) {
            for (var j = 0; j < newArr.length - i; j++) {
                if (newArr[j] > newArr[j + 1]) {
                    temp = newArr[j + 1];
                    newArr[j + 1] = newArr[j];
                    newArr[j] = temp;
                }
            }
        }

        console.log("original Array: " + oriArray + " Output Sorted Array: " + newArr);

    }
    sortNumbers([9, 4, 6, 2]);
    sortNumbers([10, 100, 80, 70]);
    sortNumbers([19, 114, 46, 2]);

    // Exercise 4

    function cesiusToFahrenheit(celsius) {
        celsius = Number(celsius);
        var fah = (celsius * 9 / 5) + 32;
        console.log(celsius.toFixed(1) + " Celsius = " + fah.toFixed(1) + " Fahrenheit")
    }

    cesiusToFahrenheit(30);
    cesiusToFahrenheit(20);
    cesiusToFahrenheit(22);
    cesiusToFahrenheit("3");  //string
    cesiusToFahrenheit("4");  //string

    // Exercise 5

    function sortObjAge(...objects) {
        let people = objects;
        people.sort(function (a, b) {
            return a.age - b.age;
        })

        console.log(people);
    }

    let objper1 = {
        name: 'Peter',
        age: 23,
        city: 'Chicago',
        great: function () {
            console.log('hello ,my name is ' + this.name)
        }
    }
    let objper2 = {
        name: 'kevin',
        age: 2,
        city: 'Washington',
        great: function () {
            console.log('hello ,my name is ' + this.name)
        }
    }
    let objper3 = {
        name: 'Lily',
        age: 21,
        city: 'Washington',
        great: function () {
            console.log('hello ,my name is ' + this.name)
        }
    }
    let objper4 = {
        name: 'Chris',
        age: 80,
        city: 'Washington',
        great: function () {
            console.log('hello ,my name is ' + this.name)
        }
    }
    let objper5 = {
        name: 'Billy',
        age: 30,
        city: 'Washington',
        great: function () {
            console.log('hello ,my name is ' + this.name)
        }
    }
    sortObjAge(objper1, objper2, objper3, objper4, objper5);