#include <Arduino.h>
#include <EEPROM.h>


int MAGIC_NUMBER = 44;
String NAME = "Onix Arm";

void write_EEPROM_string(String str, int loc) {
   String sub;
   int length;
   if (EEPROM.length() < str.length()) {
      length = EEPROM.length();
   } else {
      length = str.length();
   }

   sub = str.substring(0, length);
   int offset;
   for(offset = 0; offset < length; offset++) {
      EEPROM.write(loc + offset, str.charAt(offset));
   }
   EEPROM.write(loc + offset + 1, '\0');
}

String read_EEPROM_string(int loc) {
   int length = EEPROM.length();
   int offset = 0;
   char c;

   String rv;
   while(c != '\0' && offset + loc < length) {
      c = EEPROM.read(offset + loc);
      rv.concat(c);
      offset += 1;
   }
   return rv;
}

void init_EEPROM() {
   if(EEPROM.read(0) != MAGIC_NUMBER)  {
      Serial.write("Flashing EEPROM");
      EEPROM.write(0, MAGIC_NUMBER);
      write_EEPROM_string(NAME, 1);
   }
}

void reset_EEPROM() {
   EEPROM.write(0, 0);
}


void setup() {
   int nameAddr = 1;
   Serial.begin(9600);
   init_EEPROM();
   String name = read_EEPROM_string(1);
   Serial.print("\nmy name is ");
   Serial.print(name);
   Serial.print("\n");
}

void loop() {
}