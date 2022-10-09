#include <Arduino.h>

void setup() {
Serial.begin(9600);
   Serial.print("borg v1.0.0\n");
   Serial.print("what is this borg's name: ");
   String str =  Serial.readString();
   Serial.print("\nmy name is ");
   Serial.print(str);
   Serial.print("\n");
}

void loop() {
}