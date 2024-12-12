// 该脚本主要是用来做主要版本升级 也就是说 不兼容升级x的版本
import { spawn } from 'node:child_process';

interface PackageItem {
  packageName: string;
  currentVersion: string;
  latestVersion: string;
  wantedVersion: string;
}

// 运行pnpm outdated 命令获取需要升级的包和升级的版本
const up = spawn('pnpm', ['outdated', '--json']);

up.stdout.on('data', data => {
  // 用于存储包信息的数组
  const packages: PackageItem[] = [];
  const version = JSON.parse(data);
  Object.entries(version).forEach(([packageName, packageInfo]) => {
    const { wanted, current, latest } = packageInfo as any;
    if (packageName !== 'eslint') {
      // todo eslint 8 跟 eslint9 不兼容配置 先不升级eslint 后续在修复
      packages.push({
        packageName,
        currentVersion: current,
        latestVersion: latest,
        wantedVersion: wanted,
      });
    }
  });

  function* packageGenerator() {
    const length = packages.length;
    for (let i = 0; i < length; i++) {
      const { packageName, latestVersion } = packages[i];
      const command = `${packageName}@${latestVersion}`;
      yield executeUpdate(packageName, command);
    }
  }

  const generator = packageGenerator();

  async function execute() {
    try {
      for await (const g of generator) {
        console.log(g);
      }
    } catch (error) {
      console.error(error);
    }
  }

  execute().then(r => r);
});

function executeUpdate(packageName: string, command: string) {
  return new Promise((resolve, rejects) => {
    const upp = spawn('pnpm', ['up', command], { shell: true });
    console.log(`npm包${packageName}`, '安装中...');
    upp.on('close', code => {
      const msg = code ? '失败' : '成功';
      resolve(`npm包${packageName}${msg} \n`);
    });
    upp.stderr.on('data', data => {
      rejects(new Error(`stderr: ${packageName} 安装失败 ${data}`));
    });
  });
}
