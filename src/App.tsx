import { FormEvent, ReactNode, useState } from 'react';

type Category = 'fade' | 'taper' | 'buzz' | 'textured' | 'long' | 'color' | 'beard' | 'custom';
type LengthTarget = 'short' | 'medium' | 'long';
type ColorPreference = 'keep' | 'darker' | 'lighter' | 'custom';
type BeardPreference = 'none' | 'trim' | 'reshape' | 'full change';

type UploadedImage = {
  name: string;
  url: string;
};

type PromptCard = {
  id: string;
  label: string;
  text: string;
};

const categories: Category[] = ['fade', 'taper', 'buzz', 'textured', 'long', 'color', 'beard', 'custom'];
const lengths: LengthTarget[] = ['short', 'medium', 'long'];
const colors: ColorPreference[] = ['keep', 'darker', 'lighter', 'custom'];
const beardOptions: BeardPreference[] = ['none', 'trim', 'reshape', 'full change'];

function App() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [changeRequest, setChangeRequest] = useState('');
  const [category, setCategory] = useState<Category>('fade');
  const [lengthTarget, setLengthTarget] = useState<LengthTarget>('short');
  const [colorPreference, setColorPreference] = useState<ColorPreference>('keep');
  const [customColor, setCustomColor] = useState('');
  const [beardPreference, setBeardPreference] = useState<BeardPreference>('none');
  const [frontPhoto, setFrontPhoto] = useState<UploadedImage | null>(null);
  const [sidePhoto, setSidePhoto] = useState<UploadedImage | null>(null);
  const [referenceImage, setReferenceImage] = useState<UploadedImage | null>(null);
  const [frontResult, setFrontResult] = useState<UploadedImage | null>(null);
  const [sideResult, setSideResult] = useState<UploadedImage | null>(null);
  const [variationResults, setVariationResults] = useState<UploadedImage[]>([]);
  const [approvedLook, setApprovedLook] = useState<string | null>(null);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const readyForPrompts = Boolean(frontPhoto && name.trim() && contact.trim() && changeRequest.trim());
  const resolvedColor = colorPreference === 'custom' ? customColor.trim() || 'custom color requested' : colorPreference;

  const prompts: PromptCard[] = readyForPrompts
    ? [
        {
          id: 'front',
          label: 'Front headshot transformation prompt',
          text: buildPrompt(changeRequest, category, lengthTarget, resolvedColor, beardPreference, 'Return a realistic front-facing version of this haircut.'),
        },
        {
          id: 'side',
          label: 'Side profile prompt',
          text: buildPrompt(changeRequest, category, lengthTarget, resolvedColor, beardPreference, 'Generate a clean side profile view that matches the same haircut and beard details.'),
        },
        {
          id: 'alt',
          label: 'Alternate angle prompt',
          text: buildPrompt(changeRequest, category, lengthTarget, resolvedColor, beardPreference, 'Create a subtle 3/4 angle version that still feels natural and salon-realistic.'),
        },
      ]
    : [];

  const gallery = [frontResult, sideResult, ...variationResults].filter(Boolean) as UploadedImage[];

  async function copyPrompt(prompt: PromptCard) {
    try {
      await navigator.clipboard.writeText(prompt.text);
      setCopiedPromptId(prompt.id);
      window.setTimeout(() => setCopiedPromptId(null), 1400);
    } catch (error) {
      console.error(error);
    }
  }

  function onSingleUpload(
    event: FormEvent<HTMLInputElement>,
    setter: (value: UploadedImage | null) => void,
  ) {
    const file = event.currentTarget.files?.[0];
    setter(file ? { name: file.name, url: URL.createObjectURL(file) } : null);
  }

  function onVariationUpload(event: FormEvent<HTMLInputElement>) {
    const files = Array.from(event.currentTarget.files ?? []);
    setVariationResults(files.map((file) => ({ name: file.name, url: URL.createObjectURL(file) })));
  }

  return (
    <div className="min-h-screen bg-[#09090c] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(210,165,88,0.24),_transparent_34%),linear-gradient(180deg,_rgba(23,23,30,0.96),_rgba(10,10,14,0.96))] px-5 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:px-8">
          <div className="inline-flex rounded-full border border-[#d4a74d]/30 bg-[#d4a74d]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#f4d693]">
            Prototype Only
          </div>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">Preview Your Next Look</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            Describe a haircut or color, use your AI tool, and upload your results.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#mvp-start" className={primaryButtonClassName}>
              Start
            </a>
            <div className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 px-5 text-sm text-white/65">
              Use ChatGPT or Gemini with your own account
            </div>
          </div>
        </header>

        <SectionCard
          id="mvp-start"
          eyebrow="Step 1"
          title="Upload Your Photos"
          description="Front-facing photo required. Side and reference photos are optional but helpful."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <UploadCard label="Front photo" required image={frontPhoto} onChange={(event) => onSingleUpload(event, setFrontPhoto)} />
            <UploadCard label="Side photo" image={sidePhoto} onChange={(event) => onSingleUpload(event, setSidePhoto)} />
            <UploadCard label="Reference image" image={referenceImage} onChange={(event) => onSingleUpload(event, setReferenceImage)} />
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Step 2"
          title="Describe the Style"
          description="Keep it specific and realistic so the AI result is useful in a real barbershop or salon conversation."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input value={name} onChange={(event) => setName(event.target.value)} className={inputClassName} placeholder="Jordan" />
            </Field>
            <Field label="Email or phone">
              <input value={contact} onChange={(event) => setContact(event.target.value)} className={inputClassName} placeholder="jordan@email.com" />
            </Field>
            <Field label="What do you want to change?" className="sm:col-span-2">
              <textarea
                value={changeRequest}
                onChange={(event) => setChangeRequest(event.target.value)}
                className={`${inputClassName} min-h-28`}
                placeholder="Tighter fade, keep texture on top, slightly darker color, clean beard line."
              />
            </Field>
            <Field label="Style category">
              <select value={category} onChange={(event) => setCategory(event.target.value as Category)} className={inputClassName}>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {capitalize(item)}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Target length">
              <select value={lengthTarget} onChange={(event) => setLengthTarget(event.target.value as LengthTarget)} className={inputClassName}>
                {lengths.map((item) => (
                  <option key={item} value={item}>
                    {capitalize(item)}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Color preference">
              <select value={colorPreference} onChange={(event) => setColorPreference(event.target.value as ColorPreference)} className={inputClassName}>
                {colors.map((item) => (
                  <option key={item} value={item}>
                    {capitalize(item)}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Beard / facial hair">
              <select value={beardPreference} onChange={(event) => setBeardPreference(event.target.value as BeardPreference)} className={inputClassName}>
                {beardOptions.map((item) => (
                  <option key={item} value={item}>
                    {capitalize(item)}
                  </option>
                ))}
              </select>
            </Field>
            {colorPreference === 'custom' ? (
              <Field label="Custom color note" className="sm:col-span-2">
                <input
                  value={customColor}
                  onChange={(event) => setCustomColor(event.target.value)}
                  className={inputClassName}
                  placeholder="Warm copper brown"
                />
              </Field>
            ) : null}
          </div>
        </SectionCard>

        <SectionCard
          id="prompts"
          eyebrow="Step 3"
          title="Generate and Copy Prompts"
          description="Use your own AI tool to generate the hairstyle, then upload your favorite result below."
        >
          {readyForPrompts ? (
            <div className="grid gap-4">
              {prompts.map((prompt) => (
                <div key={prompt.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4d693]">{prompt.label}</div>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-white/76">{prompt.text}</p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <button type="button" onClick={() => copyPrompt(prompt)} className={primaryButtonClassName}>
                      {copiedPromptId === prompt.id ? 'Copied' : 'Copy Prompt'}
                    </button>
                    <a href="https://chatgpt.com/" target="_blank" rel="noreferrer" className={secondaryButtonClassName}>
                      Open ChatGPT
                    </a>
                    <a href="https://gemini.google.com/" target="_blank" rel="noreferrer" className={secondaryButtonClassName}>
                      Open Gemini
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] p-5 text-sm leading-6 text-white/66">
              Add your front photo, name, contact, and haircut description to generate prompts.
            </div>
          )}
        </SectionCard>

        <SectionCard
          eyebrow="Step 4"
          title="Upload Your AI Results"
          description="Bring back the images you generated and compare your favorite options."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <UploadCard label="Front result" image={frontResult} onChange={(event) => onSingleUpload(event, setFrontResult)} />
            <UploadCard label="Side result" image={sideResult} onChange={(event) => onSingleUpload(event, setSideResult)} />
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-sm font-semibold">Additional variations</div>
              <p className="mt-1 text-sm leading-6 text-white/62">Optional extra images for color, fade intensity, or beard cleanup.</p>
              <label className="mt-4 flex min-h-12 cursor-pointer items-center justify-center rounded-2xl border border-dashed border-white/20 bg-black/20 px-4 text-sm font-medium text-white/80">
                <input type="file" accept="image/*" multiple className="hidden" onChange={onVariationUpload} />
                Upload Variations
              </label>
              {variationResults.length ? (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {variationResults.map((image) => (
                    <img key={image.url} src={image.url} alt={image.name} className="aspect-square rounded-2xl object-cover" />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Step 5"
          title="Review and Approve"
          description="Choose a look to bring into the shop, or go back and try another prompt variation."
        >
          {gallery.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((image) => (
                <div key={image.url} className="rounded-3xl border border-white/10 bg-white/[0.04] p-3">
                  <img src={image.url} alt={image.name} className="aspect-[4/5] w-full rounded-2xl object-cover" />
                  <div className="mt-3 text-sm text-white/72">{image.name}</div>
                  <button type="button" onClick={() => setApprovedLook(image.url)} className="mt-3 w-full rounded-2xl bg-[#d4a74d] px-4 py-3 text-sm font-semibold text-[#17120b]">
                    Use This Look
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] p-5 text-sm text-white/66">
              Upload at least one AI result to review.
            </div>
          )}
          <a href="#prompts" className="mt-4 inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/12 px-5 text-sm font-semibold text-white/88">
            Try Another Version
          </a>
        </SectionCard>

        <SectionCard
          eyebrow="Step 6"
          title="Style Brief"
          description="A simple handoff summary you can print for your barber or stylist."
        >
          <div id="style-brief" className="rounded-[28px] border border-white/10 bg-[#101117] p-5 print:border-black print:bg-white print:text-black">
            <div className="border-b border-white/10 pb-4 print:border-black/20">
              <div className="text-2xl font-semibold">Style Brief</div>
              <div className="mt-1 text-sm text-white/60 print:text-black/65">
                {name || 'Client name'} · {contact || 'Contact info'}
              </div>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                <BriefImage label="Original front" image={frontPhoto} />
                <BriefImage label="Original side" image={sidePhoto} />
                <BriefImage label="Approved look" image={approvedLook ? { name: 'Approved look', url: approvedLook } : frontResult} />
                <BriefImage label="Reference" image={referenceImage} />
              </div>

              <div className="grid gap-4">
                <BriefDetail label="Requested change" value={changeRequest || 'Not provided yet'} />
                <BriefDetail label="Category" value={capitalize(category)} />
                <BriefDetail label="Target length" value={capitalize(lengthTarget)} />
                <BriefDetail label="Color" value={capitalize(resolvedColor)} />
                <BriefDetail label="Beard / facial hair" value={capitalize(beardPreference)} />
              </div>
            </div>

            <div className="mt-5 grid gap-4">
              {prompts.map((prompt) => (
                <div key={prompt.id} className="rounded-2xl border border-white/8 bg-black/20 p-4 print:border-black/10 print:bg-transparent">
                  <div className="text-sm font-semibold text-[#f4d693] print:text-black">{prompt.label}</div>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/74 print:text-black/78">{prompt.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#d4a74d]/20 bg-[#d4a74d]/10 p-4 text-sm leading-6 text-[#f6dfb3] print:border-black/15 print:bg-transparent print:text-black/75">
              AI-generated preview only. Final results depend on your stylist and your natural hair.
            </div>
          </div>

          <button type="button" onClick={() => window.print()} className="mt-4 inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-5 text-sm font-semibold text-black">
            Print This for My Barber
          </button>
        </SectionCard>
      </div>
    </div>
  );
}

function buildPrompt(
  changeRequest: string,
  category: string,
  lengthTarget: string,
  colorPreference: string,
  beardPreference: string,
  angleNote: string,
) {
  return `Using the provided photo, generate a realistic image of this same person with the following hairstyle:
${changeRequest}

Style:
${category}

Length:
${lengthTarget}

Color:
${colorPreference}

Beard/facial hair:
${beardPreference}

Requirements:
- Preserve facial identity exactly
- Preserve skin tone and face shape
- Only modify hair and facial hair
- Make it realistic and achievable by a professional barber/stylist
- Avoid exaggerated or artificial results
- Maintain natural lighting and texture
- ${angleNote}`;
}

function SectionCard({
  eyebrow,
  title,
  description,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="rounded-[28px] border border-white/10 bg-[#12131a] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.28)] sm:p-6">
      <div className="mb-5">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4d693]">{eyebrow}</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/68">{description}</p>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  children,
  className = '',
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 ${className}`}>
      <span className="text-sm font-medium text-white/82">{label}</span>
      {children}
    </label>
  );
}

function UploadCard({
  label,
  image,
  onChange,
  required = false,
}: {
  label: string;
  image: UploadedImage | null;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold">{label}</div>
        {required ? <div className="text-xs uppercase tracking-[0.2em] text-[#f4d693]">Required</div> : null}
      </div>
      <label className="mt-4 flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-[24px] border border-dashed border-white/15 bg-black/20 p-3 text-center">
        <input type="file" accept="image/*" className="hidden" onChange={onChange} />
        {image ? (
          <img src={image.url} alt={image.name} className="h-full max-h-[240px] w-full rounded-[18px] object-cover" />
        ) : (
          <div className="max-w-[14rem] text-sm leading-6 text-white/60">Tap to upload from your camera roll or desktop.</div>
        )}
      </label>
    </div>
  );
}

function BriefImage({ label, image }: { label: string; image: UploadedImage | null }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/20 p-3 print:border-black/10 print:bg-transparent">
      <div className="mb-2 text-sm font-medium text-white/78 print:text-black">{label}</div>
      {image ? (
        <img src={image.url} alt={image.name} className="aspect-[4/5] w-full rounded-2xl object-cover" />
      ) : (
        <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-white/12 text-sm text-white/45 print:border-black/15 print:text-black/40">
          Not added yet
        </div>
      )}
    </div>
  );
}

function BriefDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/20 p-4 print:border-black/10 print:bg-transparent">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45 print:text-black/50">{label}</div>
      <div className="mt-2 text-sm leading-6 text-white/82 print:text-black">{value}</div>
    </div>
  );
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const inputClassName =
  'min-h-12 rounded-2xl border border-white/10 bg-black/20 px-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-[#d4a74d]/50 focus:ring-2 focus:ring-[#d4a74d]/20';

const primaryButtonClassName =
  'inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#d4a74d] px-5 text-sm font-semibold text-[#17120b] transition hover:bg-[#e4b45a]';

const secondaryButtonClassName =
  'inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 px-5 text-sm font-semibold text-white/88 transition hover:border-white/18 hover:bg-white/[0.04]';

export default App;
