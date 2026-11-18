Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer

# Select female voice (Microsoft Zira)
$synth.SelectVoice("Microsoft Zira Desktop")

# Slower, warmer rate (-2 is natural, -4 is very slow)
$synth.Rate = -2
$synth.Volume = 100

$outPath = "C:\Users\USER\.gemini\antigravity\scratch\western-heritage-dental\public\welcome.wav"
$synth.SetOutputToWaveFile($outPath)

# Build a warm, natural-sounding greeting with SSML-like pauses via PromptBuilder
$pb = New-Object System.Speech.Synthesis.PromptBuilder
$pb.AppendText("Welcome to Comfort Dental Clinic")
$pb.AppendBreak([System.TimeSpan]::FromMilliseconds(400))
$pb.AppendText("and Implant Institute.")
$pb.AppendBreak([System.TimeSpan]::FromMilliseconds(600))
$pb.AppendText("We are so glad you are here.")
$pb.AppendBreak([System.TimeSpan]::FromMilliseconds(400))
$pb.AppendText("Your comfort and smile are our top priority.")
$pb.AppendBreak([System.TimeSpan]::FromMilliseconds(400))
$pb.AppendText("Please feel free to explore, and we look forward to caring for you.")

$synth.Speak($pb)
$synth.Dispose()
Write-Host "Done! Saved to $outPath"
