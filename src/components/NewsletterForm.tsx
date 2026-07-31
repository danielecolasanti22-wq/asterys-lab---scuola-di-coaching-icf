import { FormEvent, useState } from 'react';
import { submitToGravityForms, mapGfErrors } from '../utils/gravityForms';
import { GF_NEWSLETTER, GF_ERR_NEWSLETTER } from '../constants/gravityForms';

type Props = {
  /** Da dove arriva l'iscrizione (campo nascosto GF): es. "Footer", "Fine articolo". */
  source: string;
  placeholder?: string;
  cta?: string;
  tone?: 'light' | 'dark';
  wrapperClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
};

/** Form newsletter riutilizzabile: motore Gravity Forms, stile passato dal chiamante. */
export function NewsletterForm({
  source,
  placeholder = 'La tua email…',
  cta = 'Iscriviti',
  tone = 'light',
  wrapperClassName = '',
  inputClassName = '',
  buttonClassName = '',
}: Props) {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError(null);
    setSending(true);
    if (GF_NEWSLETTER.formId) {
      const r = await submitToGravityForms(GF_NEWSLETTER.formId, { input_1: email, input_2: source });
      setSending(false);
      if (!r.ok) {
        const fe = mapGfErrors(r.errors, GF_ERR_NEWSLETTER);
        setError(fe.email || r.message || "Controlla l'email e riprova.");
        return;
      }
    } else {
      setSending(false);
    }
    setDone(true);
  };

  if (done) {
    return (
      <p className={`text-sm font-bold ${tone === 'dark' ? 'text-white' : 'text-brand-navy'}`}>
        ✓ Iscrizione ricevuta. Grazie!
      </p>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className={wrapperClassName}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null);
          }}
          placeholder={placeholder}
          className={inputClassName}
        />
        <button type="submit" disabled={sending} className={`${buttonClassName} disabled:opacity-60 disabled:cursor-not-allowed`}>
          {sending ? '…' : cta}
        </button>
      </form>
      {error ? (
        <p className={`mt-2 text-xs font-bold ${tone === 'dark' ? 'text-red-300' : 'text-red-600'}`}>{error}</p>
      ) : null}
    </>
  );
}
