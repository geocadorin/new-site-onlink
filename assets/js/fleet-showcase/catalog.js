function modelUrl(file) {
  return new URL("../../img/models3d/" + file, import.meta.url).href;
}

export const SECTORS = [
  {
    id: "construction",
    index: 0,
    number: "01",
    shortName: "Construção",
    url: modelUrl("grader.glb"),
    tag: "Construção Pesada & Infraestrutura",
    title: "Controle total da frota em obras remotas e sem cobertura celular",
    description:
      "Monitore escavadeiras, tratores e equipamentos de linha amarela em tempo real, mesmo em canteiros isolados, aberturas de rodovias ou barragens.",
    highlights: [
      "Horímetro preciso e controle de ociosidade do motor em tempo real.",
      "Alertas imediatos de falhas e diagnósticos de engenharia embarcada.",
      "Prevenção contra uso não autorizado e controle de perímetro (Geofencing)."
    ],
    cameraTheta: 0.68
  },
  {
    id: "mining",
    index: 1,
    number: "02",
    shortName: "Mineração",
    url: modelUrl("dump_truck.glb"),
    tag: "Operações de Mineração",
    title: "Alta disponibilidade operacional em cavas profundas e minas isoladas",
    description:
      "Garanta comunicação ininterrupta para maquinário pesado operando sob condições severas de relevo, poeira e vibração.",
    highlights: [
      "Transmissão satelital contínua de telemetria crítica e parâmetros vitais da máquina.",
      "Redução de paradas não programadas com manutenção preditiva baseada em dados reais.",
      "Visibilidade completa de produtividade e ciclos de operação em áreas sem rede local."
    ],
    cameraTheta: 0.78
  },
  {
    id: "agro",
    index: 2,
    number: "03",
    shortName: "Agro",
    url: modelUrl("harvester.glb"),
    tag: "Agronegócio de Precisão",
    title: "Conectividade 100% no campo, do plantio à colheita",
    description:
      "Elimine as zonas de sombra nas fazendas. Acompanhe tratores, colheitadeiras e pulverizadores em grandes extensões territoriais sem depender de antenas locais.",
    highlights: [
      "Monitoramento de rendimento operacional, consumo de combustível e área trabalhada.",
      "Gestão eficiente da janela de safra com telemetria integrada direto na plataforma.",
      "Diagnóstico remoto preventivo para evitar máquinas paradas em períodos críticos."
    ],
    cameraTheta: 0.64
  },
  {
    id: "offshore",
    index: 3,
    number: "04",
    shortName: "OffShore",
    url: modelUrl("offshore.glb"),
    tag: "Operações Marítimas & OffShore",
    title: "Telemetria contínua em alto-mar e operações costeiras críticas",
    description:
      "Conectividade satelital de alta confiabilidade para embarcações de apoio, plataformas e equipamentos marítimos em zonas oceânicas remotas.",
    highlights: [
      "Monitoramento ininterrupto de motores, sistemas auxiliares e consumo em alto-mar.",
      "Redundância de comunicação para máxima segurança operacional fora da costa.",
      "Histórico completo de operação e alertas em tempo real independente da distância da costa."
    ],
    cameraTheta: 0.74
  }
];

export const MACHINES = SECTORS;

export function getSectorByIndex(index) {
  var clamped = Math.max(0, Math.min(SECTORS.length - 1, Number(index) || 0));
  return SECTORS[clamped];
}

export function getSector(id) {
  return (
    SECTORS.find(function (sector) {
      return sector.id === id;
    }) || SECTORS[0]
  );
}

export const getMachine = getSector;
