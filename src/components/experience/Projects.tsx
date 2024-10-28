export type ExperienceProject = {
  role: string
  year: string
  name: string
  tags: string[]
}

export const experienceProjects: Record<string, ExperienceProject> = {
  "mirea": {
    role: "Software Engineer",
    year: "2014-2018",
    name: "Russian Technological University",
    tags: [
      "Algorithms",
      "Modeling",
      "System Design",
      "Programming",
      "Problem Solving",
      "Development"
    ]
  },
  "ue-1": {
    role: "Unreal Engine Developer",
    year: "2015",
    name: "3D modeling software for modeling flats’ and rooms’ interior",
    tags: [
      "Unreal Engine"
    ]
  },
  "ue-2": {
    role: "Unreal Engine Developer",
    year: "2015-2016",
    name: "Game - clone of the S.T.A.L.K.E.R",
    tags: [
      "Unreal Engine"
    ]
  },
  "ue-3": {
    role: "Unreal Engine Developer",
    year: "2016-2017",
    name: "Game - fighting",
    tags: [
      "Unreal Engine",
      "UE Slate UI",
      "UMG",
    ]
  },
  "taxi": {
    role: "IOS/Android Developer",
    year: "2016-2017",
    name: "Software application for TAXI (like Uber)",
    tags: [
      "Google Maps API",
      "Apple Maps API",
      "Android SDK",
      "Swift",
      "Java",
      "Kotlin",
      "Fabric",
    ]
  },
  "java-1": {
    role: "Java Developer",
    year: "2016-2017",
    name: "Software for selling, activation and provisioning of multiple products for B2B clients",
    tags: [
      "JEE",
      "Spring Framework",
      "Jboss/WildFly",
      "Groovy",
      "Gradle",
      "Jenkins",
      "Ansible",
      "Maven",
      "JVM",
    ]
  },
  "java-2": {
    role: "Java Developer",
    year: "2017",
    name: "CRM B2C System",
    tags: [
      "JEE",
      "Amdocs",
      "Ant",
      "Oracle DB",
      "JVM",
    ]
  },
  "java-3": {
    role: "Java Developer",
    year: "2018",
    name: "SSO for bank software applications",
    tags: [
      "Mesos",
      "Marathon",
      "Spring Framework",
      "Jenkins",
      "Ansible",
      "Gradle",
      "Mongo",
      "Groovy",
      "Ratpack",
      "ReactiveProgramming",
    ]
  },
  "tl-1": {
    role: "Team Leader",
    year: "2018-2019",
    name: "OMS system for B2C",
    tags: [
      "Oracle DB",
      "JVM",
      "Oracle ESB",
      "Ant",
      "Amdocs Process",
      "WebLogic",
    ]
  },
  "archdev-1": {
    role: "Architect/Developer",
    year: "2019",
    name: "Transport Module for CRM System",
    tags: [
      "in-house framework",
      "JVM",
      "Oracle DB",
      "Gradle",
      "Tarantool",
      "ELK",
      "Prometheus",
      "Grafana",
    ]
  },
  "archdev-2": {
    role: "Architect/Developer",
    year: "2019",
    name: "Integration layer for CRM System",
    tags: [
      "in-house framework",
      "JVM",
      "OpenShift",
      "Kaniko",
      "Tarantool",
      "ELK",
      "Prometheus",
      "Grafana",
    ]
  },
  "tl-2": {
    role: "Team Leader",
    year: "2020-2021",
    name: "Trouble Ticket Management system (NTTM)",
    tags: [
      "Spring framework",
      "JVM",
      "K8s",
      "Angular",
      "Jenkins",
      "Camunda",
      "ELK",
      "Prometheus",
      "Grafana",
      "Haproxy",
      "RabbitMQ",
      "Solr",
      "Postgres",
      "Patroni",
    ]
  },
  "principal-1": {
    role: "Principal Software Engineer",
    year: "2021-2022",
    name: "Import Replacement",
    tags: [
      "Elbrus E2K",
      "GCC",
      "GDB",
      "CLang",
      "JVM",
      "Groovy",
      "Scala",
      "Kotlin",
      "Python",
      "FFMpeg",
      "Kurento",
      "GStreamer",
      "MongoDB",
      "ReactJS",
      "TypeScript",
      "MeteorJS",
      "Ruby",
      "Reindexer DB",
      "fcontext",
      "ucontext",
    ]
  },
  "principal-2": {
    role: "Principal Software Engineer",
    year: "2022",
    name: "Safe Repository",
    tags: [
      "Kotlin",
      "Ktor",
      "Netty",
      "Tarantool",
      "Dart",
      "Flutter",
      "Gradle",
      "Nexus API",
    ]
  },
  "devops-1": {
    role: "DevOps Engineer",
    year: "2022",
    name: "Cloud-based DevOps",
    tags: [
      "AWS",
      "GCP",
      "Terragrunt",
      "Terraform",
      "K8s",
      "ArgoCD",
      "Istio",
      "Woodpecker",
      "Spinnaker",
      "Vault",
      "Cilium",
      "Helm",
    ]
  },
  "principal-3": {
    role: "Principal Software Engineer",
    year: "2023",
    name: "Platform",
    tags: [
      "AWS",
      "GCP",
      "Terraform",
      "Terragrunt",
      "Flutter",
      "Dart",
      "k8s",
      "Istio",
      "Woodpecker",
      "Spinnaker",
      "GraalVM",
      "Helm",
      "Ktor",
      "Kotlin",
      "Go",
      "Vault",
    ]
  },
  "principal-4": {
    role: "Principal Software Engineer",
    year: "2023",
    name: "Vault Customization",
    tags: [
      "Vault",
      "Go",
      "Replication",
    ],
  },
  "principal-5": {
    role: "Principal Software Engineer",
    year: "2023",
    name: "Istio API Gateway",
    tags: [
      "Istio",
      "Envoy",
      "Go",
      "EnvoyFilter",
    ]
  }
}