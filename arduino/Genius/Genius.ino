
int leds[] = {0,1,2,3};
int switches[] = {8,9,10,11};

struct round 
{
    int led;
    struct round* prox;
} typedef round;

round* round_ini = NULL;
round* last_round = NULL;

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
  round* r = round_ini;
  int t;
  
  while(r!=NULL)
    blinkLed(r->led);
    r = r->prox;
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
  if(round_ini != NULL)
    freeRounds(round_ini);
}

void freeRounds(round* r)
{
    if(r->prox !=NULL)
        freeRounds(r);
    
    free(r);
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
    }
    delay(10);    
  }
}

int pickOne() {
  int pick = random(0,3);
  
  round* novo_round = malloc(sizeof(round));
  novo_round->led = pick;
  novo_round->prox = NULL;
  
  if(round_ini==NULL)
    round_ini = novo_round;  
  else
    last_round->prox = novo_round;

   last_round = novo_round;
  
  return pick;
}
