// import { useState } from "react";

// export default function RequestCallback() {
//   const [step, setStep] = useState(1);
//   const [submitted, setSubmitted] = useState(false);

//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [mode, setMode] = useState("");

//   const [exam, setExam] = useState("");
//   const [cls, setCls] = useState("");
//   const [callTime, setCallTime] = useState("");

//   const step1Valid = name.trim().length > 1 && mobile.trim().length === 10 && mode !== "";
//   const step2Valid = exam !== "" && cls !== "" && callTime !== "";

//   const progressWidth = submitted ? "100%" : step === 1 ? "50%" : "100%";
//   const stepLabel = step === 1 ? "1/2" : "2/2";

//   const leftTitle = submitted
//     ? "We'll call you soon!"
//     : step === 1
//     ? "Request a callback"
//     : "One last step!";

//   const leftSub = submitted
//     ? "Our team will reach out within 24 hours."
//     : step === 1
//     ? "Or call +91 9513736499"
//     : "Tell us what you're aiming for";

//   return (
//     <div
//       style={{
//         display: "flex",
//         minHeight: 320,
//         border: "1px solid #e5e7eb",
//         borderRadius: 16,
//         overflow: "hidden",
//         background: "#fff",
//         fontFamily: "sans-serif",
//       }}
//     >
//       {/* LEFT PANEL */}
//       <div
//         style={{
//           flex: 1,
//           padding: "40px 36px",
//           position: "relative",
//           background: "#fff",
//         }}
//       >
//         {/* Grid background */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             backgroundImage:
//               "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
//             backgroundSize: "28px 28px",
//             borderRadius: "16px 0 0 16px",
//             pointerEvents: "none",
//           }}
//         />

//         {/* Rocket icon */}
//         <div
//           style={{
//             width: 52,
//             height: 52,
//             borderRadius: "50%",
//             background: "#fef3e2",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: 26,
//             marginBottom: 18,
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           🚀
//         </div>

//         <h2
//           style={{
//             fontSize: 22,
//             fontWeight: 600,
//             color: "#1a1a2e",
//             margin: "0 0 6px",
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           {leftTitle}
//         </h2>
//         <p
//           style={{
//             fontSize: 13,
//             color: "#6b7280",
//             margin: "0 0 24px",
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           {leftSub}
//         </p>

//         {/* Progress bar */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 10,
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           <div
//             style={{
//               flex: 1,
//               height: 6,
//               background: "#e5e7eb",
//               borderRadius: 999,
//               overflow: "hidden",
//             }}
//           >
//             <div
//               style={{
//                 height: "100%",
//                 width: progressWidth,
//                 background: "#2cb67d",
//                 borderRadius: 999,
//                 transition: "width 0.4s ease",
//               }}
//             />
//           </div>
//           <span style={{ fontSize: 13, color: "#6b7280", minWidth: 28 }}>{stepLabel}</span>
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div
//         style={{
//           flex: 1.1,
//           padding: "40px 36px",
//           borderLeft: "1px solid #e5e7eb",
//           background: "#fff",
//           display: "flex",
//           flexDirection: "column",
//           gap: 18,
//         }}
//       >
//         {submitted ? (
//           <SuccessState />
//         ) : step === 1 ? (
//           <Step1
//             name={name}
//             setName={setName}
//             mobile={mobile}
//             setMobile={setMobile}
//             mode={mode}
//             setMode={setMode}
//             valid={step1Valid}
//             onNext={() => setStep(2)}
//           />
//         ) : (
//           <Step2
//             exam={exam}
//             setExam={setExam}
//             cls={cls}
//             setCls={setCls}
//             callTime={callTime}
//             setCallTime={setCallTime}
//             valid={step2Valid}
//             onSubmit={() => setSubmitted(true)}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// function Step1({ name, setName, mobile, setMobile, mode, setMode, valid, onNext }) {
//   return (
//     <>
//       <Field label="Full Name">
//         <input
//           style={inputStyle}
//           type="text"
//           placeholder="Ex: Rohit Sharma"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </Field>

//       <Field label="Mobile Number">
//         <input
//           style={inputStyle}
//           type="tel"
//           placeholder="Ex: 9876543210"
//           maxLength={10}
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
//         />
//       </Field>

//       <Field label="Course Mode:">
//         <div style={{ display: "flex", gap: 10 }}>
//           {["Online", "Classroom"].map((m) => (
//             <ModeButton key={m} label={m} active={mode === m} onClick={() => setMode(m)} />
//           ))}
//         </div>
//       </Field>

//       <SubmitButton label="Let's get started" valid={valid} onClick={onNext} />
//     </>
//   );
// }

// function Step2({ exam, setExam, cls, setCls, callTime, setCallTime, valid, onSubmit }) {
//   return (
//     <>
//       <Field label="Target Exam">
//         <select style={inputStyle} value={exam} onChange={(e) => setExam(e.target.value)}>
//           <option value="">Select exam</option>
//           {["JEE Main", "JEE Advanced", "NEET", "CBSE 10th", "CBSE 12th", "Olympiads"].map((o) => (
//             <option key={o}>{o}</option>
//           ))}
//         </select>
//       </Field>

//       <Field label="Class / Year">
//         <select style={inputStyle} value={cls} onChange={(e) => setCls(e.target.value)}>
//           <option value="">Select class</option>
//           {["Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Dropper"].map((o) => (
//             <option key={o}>{o}</option>
//           ))}
//         </select>
//       </Field>

//       <Field label="Preferred Call Time">
//         <select style={inputStyle} value={callTime} onChange={(e) => setCallTime(e.target.value)}>
//           <option value="">Select time slot</option>
//           {[
//             "9:00 AM – 11:00 AM",
//             "11:00 AM – 1:00 PM",
//             "2:00 PM – 4:00 PM",
//             "4:00 PM – 6:00 PM",
//             "6:00 PM – 8:00 PM",
//           ].map((o) => (
//             <option key={o}>{o}</option>
//           ))}
//         </select>
//       </Field>

//       <SubmitButton label="Submit Request" valid={valid} onClick={onSubmit} />
//     </>
//   );
// }

// function SuccessState() {
//   return (
//     <div
//       style={{
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: 12,
//         textAlign: "center",
//       }}
//     >
//       <div
//         style={{
//           width: 56,
//           height: 56,
//           borderRadius: "50%",
//           background: "#edfaf4",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 28,
//         }}
//       >
//         ✓
//       </div>
//       <p style={{ fontSize: 16, fontWeight: 600, color: "#1a1a2e", margin: 0 }}>
//         Request Submitted!
//       </p>
//       <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
//         Our counsellor will call you shortly.
//       </p>
//     </div>
//   );
// }

// function Field({ label, children }) {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
//       <label style={{ fontSize: 13, color: "#374151" }}>{label}</label>
//       {children}
//     </div>
//   );
// }

// function ModeButton({ label, active, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       style={{
//         padding: "8px 22px",
//         borderRadius: 12,
//         border: active ? "1.5px solid #2cb67d" : "1px solid #d1d5db",
//         background: active ? "#edfaf4" : "#fff",
//         color: active ? "#1a7a55" : "#1a1a2e",
//         fontSize: 13,
//         fontWeight: active ? 500 : 400,
//         cursor: "pointer",
//         transition: "all 0.18s",
//       }}
//     >
//       {label}
//     </button>
//   );
// }

// function SubmitButton({ label, valid, onClick }) {
//   return (
//     <button
//       onClick={valid ? onClick : undefined}
//       style={{
//         marginTop: "auto",
//         width: "100%",
//         padding: 13,
//         borderRadius: 999,
//         border: "none",
//         background: valid ? "#1a1a2e" : "#e0e0e0",
//         color: valid ? "#fff" : "#888",
//         fontSize: 15,
//         fontWeight: 500,
//         cursor: valid ? "pointer" : "not-allowed",
//         transition: "background 0.25s",
//       }}
//       onMouseEnter={(e) => { if (valid) e.currentTarget.style.background = "#2cb67d"; }}
//       onMouseLeave={(e) => { if (valid) e.currentTarget.style.background = "#1a1a2e"; }}
//     >
//       {label}
//     </button>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   boxSizing: "border-box",
//   padding: "10px 14px",
//   fontSize: 14,
//   border: "1px solid #d1d5db",
//   borderRadius: 12,
//   background: "#fff",
//   color: "#1a1a2e",
//   outline: "none",
// };