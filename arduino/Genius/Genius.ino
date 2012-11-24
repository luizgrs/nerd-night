
int leds[] = {0,1,2,3};
int switches[] = {8,9,10,11};
int num_rounds = 0;
int rounds[0];

void setup() {
  int i;
  for(i=0;i<4;i++) {
    pinMode(leds[i], OUTPUT);
    pinMode(switches[i], INPUT);
    
    digitalWrite(leds[i], HIGH);
    delay(300);
  }
  broadcast(LOW);
}

void loop() {
  //sorts a color
  int lastPick = pickOne();
  
  //displays sequence to the user
  int t;
  for(t=0;t<num_rounds;t++) {
    blinkLed(rounds[t]);
  }
 
  //waits for user input
  int pushedButton = readInput();
  if(lastPick==pushedButton)
    nice();
  else
    fail();
}

//correct sequence
void nice() {
  int i;
  for(i=0;i<3;i++) {
    broadcast(HIGH);
    delay(100);
    broadcast(LOW);
    delay(100);
  }
}

//wrong sequence
void fail() {  
  broadcast(HIGH);
  int i;
  for(i=3;i>=0;i--) {
    delay(300);
    digitalWrite(leds[i], LOW);
  }
  readInput();
  reset();
}

void reset() {
  num_rounds = 0;
  //TODO limpar o array rounds
}

void blinkLed(int ledIndex) {
  digitalWrite(leds[ledIndex], HIGH);
  delay(500);
  digitalWrite(leds[ledIndex], LOW);
  delay(500);
}

void broadcast(int signal) {
  int i;
  for(i=0;i<4;i++) {
    digitalWrite(leds[i], signal);
  }
}

int readInput() {
  int i;
  while(true) {
    for(i=0;i<3;i++) {
      if(digitalRead(switches[i]==HIGH))
        return i;
      delay(10);
    }
  }
}

int pickOne() {
  int pick = random(0,3);
  //TODO adicionar pick ao vetor de rounds
  num_rounds++;
  return pick;
}
