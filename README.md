# Stok App

Node.js ve Express.js ile geliştirilmiş, 12-Factor App metodolojisine uygun, hafif ve test odaklı bir stok takip REST API'si.

---

## Özellikler

- **Çalışma Zamanı İzolasyonu:** Node.js v24 (`.nvmrc` ile kilitlenmiş sürüm).
- **Bağımlılık Güvenliği:** `package-lock.json` üzerinden tam sürüm kilitli deterministik kurulum (`npm ci`).
- **Ortam Bağımsızlığı:** Kod ve konfigürasyon ayrımı (`.env` ve `.env.example`).
- **Otomatik Testler:** Node.js yerleşik test motoru (`node --test`) ile doğrulanan API uçları.
- **Kontrollü YZ Mimarisi:** `AGENTS.md` ve `PRD.md` ile tanımlı yapay zekâ geliştirme anayasası.

---

## Kurulum ve Çalıştırma

### 1. Gereksinimler
Node.js sürüm yöneticisini (`nvm`) kullanarak projeye uygun sürümü yükleyin ve etkinleştirin:
```bash
nvm install
nvm useat << 'EOF' > README.md
# Stok App

Node.js ve Express.js ile geliştirilmiş, 12-Factor App metodolojisine uygun, hafif ve test odaklı bir stok takip REST API'si.

---

## Özellikler

- **Çalışma Zamanı İzolasyonu:** Node.js v24 (`.nvmrc` ile kilitlenmiş sürüm).
- **Bağımlılık Güvenliği:** `package-lock.json` üzerinden tam sürüm kilitli deterministik kurulum (`npm ci`).
- **Ortam Bağımsızlığı:** Kod ve konfigürasyon ayrımı (`.env` ve `.env.example`).
- **Otomatik Testler:** Node.js yerleşik test motoru (`node --test`) ile doğrulanan API uçları.
- **Kontrollü YZ Mimarisi:** `AGENTS.md` ve `PRD.md` ile tanımlı yapay zekâ geliştirme anayasası.

---

## Kurulum ve Çalıştırma

### 1. Gereksinimler
Node.js sürüm yöneticisini (`nvm`) kullanarak projeye uygun sürümü yükleyin ve etkinleştirin:
```bash
nvm install
nvm use
'EOF'
