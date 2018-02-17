// Source : https://www.hackerrank.com/challenges/30-class-vs-instance
// Author : Frank Faustino
// Date   : 2018-02-17
// Lang   : C#

class Person {
    public int age;
    public Person(int n) {
        if (n < 0) {
            age = 0;
            Console.WriteLine("Age is not valid, setting age to 0.");
        }
        age = n;
     }
     public void amIOld() {
        if (age < 13) Console.WriteLine("You are young.");
        else if (age >= 13 && age < 18) Console.WriteLine("You are a teenager.");
        else Console.WriteLine("You are old.");
     }
     public void yearPasses() {
        age += 1;
     }