
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import VoiceSelector from "@/components/VoiceSelector";
import { MALE_VOICES, FEMALE_VOICES } from "@/lib/constants";
import { useTTS } from "@/hooks/useTTS";
import { PlusCircle, Send, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Character {
  id: string;
  name: string;
  voiceId: string;
}

interface Message {
  id: string;
  characterId: string;
  text: string;
}

const MultiCharacterConversation = () => {
  const [characters, setCharacters] = useState<Character[]>([
    { id: "char-1", name: "Character 1", voiceId: MALE_VOICES[0].id },
    { id: "char-2", name: "Character 2", voiceId: FEMALE_VOICES[0].id },
  ]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<string>("char-1");
  const { generateSpeech, isLoading } = useTTS();
  const { toast } = useToast();

  const handleAddCharacter = () => {
    const newId = `char-${characters.length + 1}`;
    const newCharacter = {
      id: newId,
      name: `Character ${characters.length + 1}`,
      voiceId: characters.length % 2 === 0 ? FEMALE_VOICES[0].id : MALE_VOICES[0].id,
    };
    setCharacters([...characters, newCharacter]);
    setSelectedCharacter(newId);
  };

  const handleRemoveCharacter = (id: string) => {
    if (characters.length <= 2) {
      toast({
        title: "Cannot remove character",
        description: "You need at least two characters for a conversation.",
        variant: "destructive",
      });
      return;
    }
    setCharacters(characters.filter((char) => char.id !== id));
    if (selectedCharacter === id) {
      setSelectedCharacter(characters[0].id);
    }
    setMessages(messages.filter((msg) => msg.characterId !== id));
  };

  const handleChangeCharacterVoice = (characterId: string, voiceId: string) => {
    setCharacters(
      characters.map((char) =>
        char.id === characterId ? { ...char, voiceId } : char
      )
    );
  };

  const handleChangeCharacterName = (characterId: string, name: string) => {
    setCharacters(
      characters.map((char) =>
        char.id === characterId ? { ...char, name } : char
      )
    );
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) {
      toast({
        title: "Message is empty",
        description: "Please enter a message to send.",
        variant: "destructive",
      });
      return;
    }

    const newMessage = {
      id: `msg-${Date.now()}`,
      characterId: selectedCharacter,
      text: currentMessage,
    };

    setMessages([...messages, newMessage]);
    setCurrentMessage("");

    const character = characters.find((char) => char.id === selectedCharacter);
    if (character) {
      const voice = [...MALE_VOICES, ...FEMALE_VOICES].find(
        (voice) => voice.id === character.voiceId
      );
      if (voice) {
        try {
          await generateSpeech({
            text: currentMessage,
            voiceId: voice.voiceId,
          });
        } catch (error) {
          console.error("Error generating speech:", error);
          toast({
            title: "Error",
            description: "Failed to generate speech. Please try again.",
            variant: "destructive",
          });
        }
      }
    }
  };

  const getCharacterById = (id: string) => {
    return characters.find((char) => char.id === id);
  };

  return (
    <div className="glass-morphism rounded-xl p-6 md:p-8 animate-smooth-appear">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-wrap gap-3">
          {characters.map((character) => (
            <div
              key={character.id}
              className={`glass-morphism rounded-lg p-4 flex-1 min-w-[260px] space-y-3 ${
                selectedCharacter === character.id
                  ? "border border-pink/30"
                  : "border border-white/10"
              }`}
            >
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={character.name}
                  onChange={(e) =>
                    handleChangeCharacterName(character.id, e.target.value)
                  }
                  className="bg-transparent border-none focus:outline-none text-lg font-medium"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveCharacter(character.id)}
                  className="h-8 w-8 text-white/50 hover:text-white hover:bg-pink/10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <VoiceSelector
                selectedVoice={character.voiceId}
                onSelect={(voice) => handleChangeCharacterVoice(character.id, voice)}
                className="w-full"
              />

              <Button
                variant="outline"
                className={`w-full border-white/10 hover:border-white/20 ${
                  selectedCharacter === character.id
                    ? "bg-pink/10 text-pink"
                    : "bg-background/50"
                }`}
                onClick={() => setSelectedCharacter(character.id)}
              >
                {selectedCharacter === character.id
                  ? "Selected"
                  : "Select Character"}
              </Button>
            </div>
          ))}
          <div className="flex-1 min-w-[260px] glass-morphism rounded-lg p-4 flex flex-col items-center justify-center">
            <Button
              variant="ghost"
              className="h-20 w-20 rounded-full border border-dashed border-white/20 hover:border-pink/30 hover:bg-pink/5"
              onClick={handleAddCharacter}
            >
              <PlusCircle className="h-8 w-8 text-white/70" />
            </Button>
            <span className="mt-2 text-sm text-white/70">Add Character</span>
          </div>
        </div>

        <div className="glass-morphism rounded-lg p-4 min-h-[300px] max-h-[400px] overflow-y-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-white/50 text-center">
              <p className="mb-2">No messages yet</p>
              <p className="text-sm">
                Select a character and start the conversation
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => {
                const character = getCharacterById(message.characterId);
                return (
                  <div key={message.id} className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-medium text-pink">
                        {character?.name}
                      </div>
                      <div className="text-xs text-white/50">
                        {[...MALE_VOICES, ...FEMALE_VOICES].find(
                          (voice) => voice.id === character?.voiceId
                        )?.gender}
                      </div>
                    </div>
                    <div className="glass-morphism rounded p-3">
                      {message.text}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex space-x-2">
          <Textarea
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Type your message here..."
            className="bg-background/50 border-white/10 focus:border-pink/30 min-h-[80px]"
          />
          <Button
            className="bg-pink hover:bg-pink-dark transition-colors pink-glow self-end"
            size="icon"
            onClick={handleSendMessage}
            disabled={isLoading || !currentMessage.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  