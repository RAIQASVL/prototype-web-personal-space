import FloatingShape from "./components/FloatingShape";

function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-white
    to-black flex items-center justify-center relative overflow-hidden"
    >
      <FloatingShape
        color="bg-black"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-black"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-black"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />
    </div>
  );
}

export default App;
