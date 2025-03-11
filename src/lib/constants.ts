
// Top 20 languages by global usage
export const LANGUAGES = [
  { id: "en", name: "English", flag: "🇺🇸" },
  { id: "zh", name: "Chinese", flag: "🇨🇳" },
  { id: "hi", name: "Hindi", flag: "🇮🇳" },
  { id: "es", name: "Spanish", flag: "🇪🇸" },
  { id: "fr", name: "French", flag: "🇫🇷" },
  { id: "ar", name: "Arabic", flag: "🇸🇦" },
  { id: "bn", name: "Bengali", flag: "🇧🇩" },
  { id: "ru", name: "Russian", flag: "🇷🇺" },
  { id: "pt", name: "Portuguese", flag: "🇵🇹" },
  { id: "id", name: "Indonesian", flag: "🇮🇩" },
  { id: "ur", name: "Urdu", flag: "🇵🇰" },
  { id: "ja", name: "Japanese", flag: "🇯🇵" },
  { id: "de", name: "German", flag: "🇩🇪" },
  { id: "tr", name: "Turkish", flag: "🇹🇷" },
  { id: "ko", name: "Korean", flag: "🇰🇷" },
  { id: "vi", name: "Vietnamese", flag: "🇻🇳" },
  { id: "ta", name: "Tamil", flag: "🇮🇳" },
  { id: "it", name: "Italian", flag: "🇮🇹" },
  { id: "th", name: "Thai", flag: "🇹🇭" },
  { id: "pl", name: "Polish", flag: "🇵🇱" },
];

export const EMOTIONS = [
  { id: "neutral", name: "Neutral" },
  { id: "happy", name: "Happy" },
  { id: "sad", name: "Sad" },
  { id: "angry", name: "Angry" },
  { id: "fearful", name: "Fearful" },
  { id: "disgusted", name: "Disgusted" },
  { id: "surprised", name: "Surprised" },
  { id: "whispering", name: "Whispering" },
  { id: "shouting", name: "Shouting" },
  { id: "excited", name: "Excited" },
  { id: "friendly", name: "Friendly" },
  { id: "unfriendly", name: "Unfriendly" },
];

export const SERVICES = [
  {
    id: "voice-generation",
    title: "AI Voice Generation",
    description: "Generate human-like voices in 20+ languages with advanced AI technology.",
    icon: "mic",
  },
  {
    id: "text-to-speech",
    title: "Text-to-Speech",
    description: "Convert any text to natural-sounding speech with emotion control.",
    icon: "message-square-text",
  },
  {
    id: "voice-cloning",
    title: "AI Voice Cloning",
    description: "Clone voices with just a few minutes of audio samples.",
    icon: "copy",
  },
  {
    id: "ai-agents",
    title: "AI Voice Agents",
    description: "Create intelligent AI voice bots for customer support and automation.",
    icon: "bot",
  },
  {
    id: "audio-editing",
    title: "Professional Audio Editing",
    description: "Edit, enhance, and perfect your audio with studio-quality tools.",
    icon: "waveform",
  },
  {
    id: "voiceover-studio",
    title: "Voiceover Studio",
    description: "Create professional voiceovers for videos, podcasts, and more.",
    icon: "album",
  },
];

export const FEATURES = [
  {
    id: "voice-modulation",
    title: "Advanced Voice Modulation",
    description: "Control pitch, tone, speed, and emotions in real-time.",
  },
  {
    id: "multi-language",
    title: "20+ Languages Support",
    description: "Generate natural voices in over 20 languages and accents.",
  },
  {
    id: "voice-cloning",
    title: "Voice Cloning Technology",
    description: "Create your own AI voice with just a few minutes of samples.",
  },
  {
    id: "multi-character",
    title: "Multi-Character Dialog",
    description: "Create conversations between multiple AI voices effortlessly.",
  },
  {
    id: "emotional-voices",
    title: "Emotional AI Voices",
    description: "Generate voices with authentic emotions from happy to sad.",
  },
  {
    id: "studio-quality",
    title: "Studio-Quality Audio",
    description: "Professional-grade voice generation with noise removal.",
  },
  {
    id: "api-access",
    title: "Developer API Access",
    description: "Integrate our AI voices into your own applications.",
  },
];

// Top 10 male voices with full ElevenLabs IDs
export const MALE_VOICES = [
  { id: "roger", name: "Roger", gender: "male", type: "Premium", voiceId: "CwhRBWXzGAHq8TQ4Fs17" },
  { id: "charlie", name: "Charlie", gender: "male", type: "Premium", voiceId: "IKne3meq5aSn9XLyUdCD" },
  { id: "george", name: "George", gender: "male", type: "Premium", voiceId: "JBFqnCBsd6RMkjVDRZzb" },
  { id: "callum", name: "Callum", gender: "male", type: "Premium", voiceId: "N2lVS1w4EtoT3dr4eOWO" },
  { id: "liam", name: "Liam", gender: "male", type: "Premium", voiceId: "TX3LPaxmHKxFdv7VOQHJ" },
  { id: "will", name: "Will", gender: "male", type: "Premium", voiceId: "bIHbv24MWmeRgasZH58o" },
  { id: "eric", name: "Eric", gender: "male", type: "Premium", voiceId: "cjVigY5qzO86Huf0OWal" },
  { id: "chris", name: "Chris", gender: "male", type: "Premium", voiceId: "iP95p4xoKVk53GoZ742B" },
  { id: "brian", name: "Brian", gender: "male", type: "Premium", voiceId: "nPczCjzI2devNBz1zQrb" },
  { id: "daniel", name: "Daniel", gender: "male", type: "Premium", voiceId: "onwK4e9ZLuTAKqWW03F9" },
];

// Top 10 female voices with full ElevenLabs IDs
export const FEMALE_VOICES = [
  { id: "aria", name: "Aria", gender: "female", type: "Premium", voiceId: "9BWtsMINqrJLrRacOk9x" },
  { id: "sarah", name: "Sarah", gender: "female", type: "Premium", voiceId: "EXAVITQu4vr4xnSDxMaL" },
  { id: "laura", name: "Laura", gender: "female", type: "Premium", voiceId: "FGY2WhTYpPnrIDTdsKH5" },
  { id: "river", name: "River", gender: "female", type: "Premium", voiceId: "SAz9YHcvj6GT2YYXdXww" },
  { id: "charlotte", name: "Charlotte", gender: "female", type: "Premium", voiceId: "XB0fDUnXU5powFXDhCwa" },
  { id: "alice", name: "Alice", gender: "female", type: "Premium", voiceId: "Xb7hH8MSUJpSbSDYk0k2" },
  { id: "matilda", name: "Matilda", gender: "female", type: "Premium", voiceId: "XrExE9yKIg1WjnnlVkGX" },
  { id: "jessica", name: "Jessica", gender: "female", type: "Premium", voiceId: "cgSgspJ2msm6clMCkdW9" },
  { id: "lily", name: "Lily", gender: "female", type: "Premium", voiceId: "pFZP5JQG7iQjIQuC4Bku" },
  { id: "emma", name: "Emma", gender: "female", type: "Premium", voiceId: "custom-emma" },
];

export const ALL_VOICES = [...MALE_VOICES, ...FEMALE_VOICES];

export const MODELS = [
  {
    id: "eleven_multilingual_v2",
    name: "Eleven Multilingual v2",
    description: "Our most life-like, emotionally rich model in 20+ languages.",
    tag: "Premium",
  },
  {
    id: "eleven_turbo_v2",
    name: "Eleven Turbo v2",
    description: "English-only, low latency model for developer use cases.",
    tag: "Fast",
  },
  {
    id: "eleven_multilingual_v1",
    name: "Eleven Multilingual v1",
    description: "Original multilingual model capable of generating speech in 10 languages.",
    tag: "Standard",
  },
  {
    id: "eleven_monolingual_v1",
    name: "Eleven English v1",
    description: "Our first text to speech model. Now outclassed by newer models.",
    tag: "Legacy",
  },
];
